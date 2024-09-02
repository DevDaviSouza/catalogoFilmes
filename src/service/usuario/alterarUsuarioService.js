import { alterarUsuario } from "../../repository/usuarioRepository.js";

export default async function alterarUsuarioService(usuario, id) {
  let linhasAfetadas = await alterarUsuario(usuario, id)
  console.log(linhasAfetadas);
  
  return linhasAfetadas;
}