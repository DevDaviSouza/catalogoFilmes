import { consultarUsuarioPorID } from "../../repository/usuarioRepository.js";

export default async function buscarUsuarioPorIDService(id) {
  let buscarUsu = await consultarUsuarioPorID(id)
  
  return buscarUsu;
}