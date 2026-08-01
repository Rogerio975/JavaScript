const hora = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};
console.log(hora());

const agora = new Date();
const dataHora = agora.toLocaleString('pt-BR');
console.log(dataHora);

module.exports = hora;