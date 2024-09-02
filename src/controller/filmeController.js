import { Router } from "express";
import '../utils/global.js'

import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmeService from "../service/filme/deletarFilmeService.js";

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

//consultar filme por ID
endpoints.get('/filme/:id', async (req, resp) => {
  try {
    //recebe o filme por parametro de rota e armazena na variável id.
    let id = req.params.id;
    //chama a função de consulta da camada service passando o id como parametro.
    let filmeRetorno = await consultarFilmePorIdService(id);

    // retorna o filme encontrado
    resp.send(filmeRetorno);
  } catch (err) {
    //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

endpoints.put('/filme/:id', async (req, resp) => {
  try {
    // capturar objeto do body e id.
    let filmeObj = req.body;
    let id = req.params.id;

    //chama a função que altera o filme.
    await alterarFilmeService(filmeObj, id);

    //retorna somente o status.
    resp.status(204).send();
} catch (err) {
    //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

endpoints.delete('/filme/:id', async (req, resp) => {
  try {
    //captura o id passado por meio do parametro de rota
    let id = req.params.id; 

    //executa a função deleter filme
    await deletarFilmeService(id)
    
    //retorna o status 204
    resp.status(204).send();
  } catch (err) {
     //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
     logError(err);
     resp.status(400).send(criarErro(err));
  }
})

export default endpoints;