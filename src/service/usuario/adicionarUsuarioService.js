import { cadastrarUsuario } from "../../repository/usuarioRepository.js";
import { validarNovoUsuario } from "../../validation/usuario/usuarioValidation.js";

export default async function adicionarUsuarioService(usuarioObj) {
  validarNovoUsuario(usuarioObj);

  let id = cadastrarUsuario(usuarioObj)

  return id;
}