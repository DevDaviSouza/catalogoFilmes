import { Router } from "express";
import '../utils/global.js';
import adicionarUsuarioService from "../service/usuario/adicionarUsuarioService.js";
import listarTodosUsuariosService from "../service/usuario/listarTodosUsuariosService.js";
import buscarUsuarioPorIDService from "../service/usuario/buscarUsuarioPorIDService.js";
import alterarUsuarioService from "../service/usuario/alterarUsuarioService.js";
import deletarUsuarioService from "../service/usuario/deletarUsuarioService.js";
import loginUsuarioService from "../service/usuario/loginUsuarioService.js";

const endpoints = Router();

endpoints.post('/login', async (req, resp) => {
  let usuario = req.body;


  
})

//cadastrar um novo usuario
endpoints.post('/usuario', async (req, resp) => {
try {
  let usuario = req.body;

  let idCadastrado = await adicionarUsuarioService(usuario)

  resp.send({id: idCadastrado})
} catch (err) {
  //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
  logError(err);
  resp.status(400).send(criarErro(err));
}
})

//listar todos usuarios
endpoints.get('/usuario', async (req, resp) => {
  try {
    let usuarios = await listarTodosUsuariosService()
  
    resp.send(usuarios)
    
  } catch (err) {
    //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

endpoints.get('/usuario/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let usuario = await buscarUsuarioPorIDService(id);

    resp.send(usuario)
  } catch (err) {
    //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

endpoints.put('/usuario/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let usuario = req.body
  
    await alterarUsuarioService(usuario, id);

    resp.status(204).send();
  } catch (err) {
     //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
     logError(err);
     resp.status(400).send(criarErro(err));
  }
})

endpoints.delete('/usuario/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    await deletarUsuarioService(id)

    resp.status(204).send();
  } catch (err) {
    //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

endpoints.get('/login', async (req, resp) => {
  try {
    //captura o e-mail e senha.
    let { email, senha } = req.body
    //executa a função de login.
    let retornoUsuario = await loginUsuarioService(email, senha)
    //retorna o usuario.
    resp.send(retornoUsuario);

  } catch (err) {
    //utiliza as funções globais para gerar uma mensagem de erro mais amigável e de mais fácil entendimento.
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

export default endpoints;