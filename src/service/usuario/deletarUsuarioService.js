import { deletarUsuario } from "../../repository/usuarioRepository.js";

export default async function deletarUsuarioService(id) {
  let linhasAfetadas = deletarUsuario(id)
  return linhasAfetadas
}