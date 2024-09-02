import { consultarFilmePorNome, salvarFilme } from "../../repository/filmeRepository.js"
import { validarNovoFilme, validarFilmeIgual } from "../../validation/filme/filmeValidation.js";

// onde é feita a lógica de negócio/funcionalidades dos endpoints

//função por trás do endpoint de adicionar filme
export default async function salvarFilmeService(filme) {
  
  //chama as validações de erros de usuário
  validarNovoFilme(filme);

  //busca filmes com o mesmo nome
  //valida se existe filme com mesmo nome
  let registros = await consultarFilmePorNome(filme.nome);
  validarFilmeIgual(registros);

  //chama a função salvarFilme do repository, onde é feita a integração dos dados selecionados com o banco.
  let id = await salvarFilme(filme);
  
  //retorno do objeto passado ao banco.
  return id;
}