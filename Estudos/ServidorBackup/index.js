const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const BACKUP_DIR = path.join(__dirname, 'backups');

// Configuração do multer para upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, BACKUP_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Upload de arquivo
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
  }
  res.json({ message: 'Arquivo enviado com sucesso!', filename: req.file.originalname });
});

// Listar arquivos
app.get('/files', (req, res) => {
  fs.readdir(BACKUP_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: 'Erro ao listar arquivos.' });
    res.json(files);
  });
});

// Download de arquivo
app.get('/files/:filename', (req, res) => {
  const filePath = path.join(BACKUP_DIR, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Arquivo não encontrado.' });
  }
  res.download(filePath);
});

// Remover arquivo
app.delete('/files/:filename', (req, res) => {
  const filePath = path.join(BACKUP_DIR, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Arquivo não encontrado.' });
  }
  fs.unlink(filePath, err => {
    if (err) return res.status(500).json({ error: 'Erro ao remover arquivo.' });
    res.json({ message: 'Arquivo removido com sucesso.' });
  });
});

// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('<h1>Servidor de Backup em Node.js</h1><p>Use as rotas /upload, /files, /files/:filename para interagir.</p>');
});

app.listen(PORT, () => {
  console.log(`Servidor de backup rodando em http://localhost:${PORT}`);
});
