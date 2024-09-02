import { consultarFilmesPorNome } from "../../repository/filmeRepository.js";

//função por trás do endpoint de consultar filmes
export default async function consultarFilmesService(nome) {
  //valida se o nome do filme está vazio e, se estiver, altera para ''. Assim não corremos o risco de ter um retorno undefined.
  if(!nome) nome = ''

  //chama a função do repository que realiza a consulta no banco de dados e a retorna.
  let registros = await consultarFilmesPorNome(nome);
  return registros;
}