import { Router } from "express";
import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import '../utils/global.js'
import consultarFilmesService from "../service/filme/consultarFilmesService.js";

//criação da constante endpoints que basicamente é a extensão do nosso servidor.
//criamos ela para que seja possível criar os endpoints em outro arquivo e depois exporta-los ao arquivo principal.
const endpoints = Router();

//endpoint responsável por adicionar um novo filme ao banco de dados.
endpoints.post('/filme', async (req, resp) => {
  try {
    //recebe o objeto do filme passado em formato json por quem faz a requisição
    let filmeOBJ = req.body;
    //chama o SalvarFilmeService passando o filme recebido como parâmetro e armazena seu retorno na variável ID.
    let id = await salvarFilmeService(filmeOBJ);

    //retorna o ID recebido ao salvar o filme.
  resp.send({
    id: id
  })
  } catch (err) {
    //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
    logError(err);
    resp.status(400).send(criarErro(err));
  }
  
})

//endpoint responsável por buscar um filme por seu ID.
endpoints.get('/filme', async (req, resp) => {
  try {
    //recebe o nome por meio de um parametro de query
    let nome = req.query.nome;
    // chama a função de consultar filmes do service
    let registros = await consultarFilmesService(nome);

    // retorna a função da service para o usuario.
    resp.send(registros)
  } catch (err) {
    //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

export default endpoints;