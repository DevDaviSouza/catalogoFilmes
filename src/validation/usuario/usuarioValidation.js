export function validarNovoUsuario(usuario) {
  if (!usuario.nome) throw new Error("Nome do usuario obrigatorio");
  if (!usuario.email) throw new Error("Nome do usuario obrigatorio");
  if (!usuario.senha) throw new Error("Nome do usuario obrigatorio");
}

export function verificarLogin(usuario) {
  if (usuario == null) throw new Error("O usuário precisa ser preenchido");
  
}