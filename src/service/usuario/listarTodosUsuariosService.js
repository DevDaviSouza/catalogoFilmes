import { consultarUsuarios } from "../../repository/usuarioRepository.js";

export default async function listarTodosUsuariosService() {
  let usuarios = await consultarUsuarios();
  return usuarios;
}