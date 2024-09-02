//função para formatar a data da mensagem de erro
export function horaAtual() {
  let agora = new Date();
  let msg = agora.toLocaleDateString() + ' ' + agora.toLocaleTimeString();
  return msg;
}