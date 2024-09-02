//validação de erros do usuário
export function validarNovoFilme(filmeObj) {
  //preenchimento
  if (!filmeObj.nome) throw new Error("Nome do filme Obrigatório");
  if (!filmeObj.sinopse) throw new Error("Sinopse do filme Obrigatório");
  if (!filmeObj.avaliacao) throw new Error("Avaliação do filme Obrigatória");
  if (!filmeObj.lancamento) throw new Error("Lançamento do filme Obrigatório");
  if (filmeObj.disponivel == undefined) throw new Error("Disponibilidade do filme Obrigatória");

  //dados corretos
  if (isNaN(filmeObj.avaliacao)) throw new Error("Avaliação do filme inválida");
}

export function validarFilmeIgual(registros) {
  if (registros.length > 0) {
    throw new Error("Já existe filme cadastrado com esse nome!");
    
  }
}

export function validarFilmeUnico(registros) {
  if (registros.length == 0) {
    throw new Error("Filme não encontrado");
    
  }
}