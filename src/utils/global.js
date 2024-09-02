import { horaAtual} from "./datetime.js"

//funções globais

//função que cria um retorno de erro em formato de objeto com a sua mensagem
global.criarErro = function criarErro(err) {
  let obj = { 
    erro: err.message
  }

  return obj;
}

//cria um log de erro para que a pessoa que executar a API também consiga ver o erro que está recebendo.
global.logError = function logError(err) {
  console.log(horaAtual() + ' ERROR  --> ' + err.message);
  
}