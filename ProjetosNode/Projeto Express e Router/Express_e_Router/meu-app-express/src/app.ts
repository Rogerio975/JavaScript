import express from 'express';
import { setHomeRoutes } from './routes/homeRoutes';
import { setContactRoutes } from './routes/contactRoutes';
import { setAboutRoutes } from './routes/aboutRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do middleware
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Definindo as rotas
setHomeRoutes(app);
setContactRoutes(app);
setAboutRoutes(app);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});