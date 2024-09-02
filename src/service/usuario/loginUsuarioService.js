import { loginUser } from "../../repository/usuarioRepository.js";
import { verificarLogin } from "../../validation/usuario/usuarioValidation.js";


export default async function loginUsuarioService(email,senha) {
  verificarLogin(email, senha)
  let retorno = await loginUser(email,senha)
  return retorno;
}