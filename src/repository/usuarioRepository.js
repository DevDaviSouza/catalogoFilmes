import con from "./connection.js";

export async function cadastrarUsuario(usuario) {
  let comando = `
      INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
                     VALUES(?, ?, ?)
      `                  
      //utilização do comando query para passar os values do comando de insert com base no objeto recebido por parametro
      let res = await con.query(comando, [usuario.nome, usuario.email, usuario.senha])
      
      //capturando a linha do banco da dados recém criada 
      let info = res[0];

      //capturando o id do usuario recém criado e retornando-o.
      let idUsuario = info.insertId;
      return idUsuario;
}

export async function consultarUsuarios() {
  let comando = `
    SELECT id_usuario         id,
           nm_usuario         nome,
           ds_email           email,
           ds_senha           senha
       FROM tb_usuario
  `;

   //faz a formatação do nome para se adequar as normas do sql no momento da busca
   let res = await con.query(comando);

   //retorna a linha completa.
   return res[0];
}

export async function consultarUsuarioPorID(id) {
  let comando = `
    SELECT id_usuario       id,
           nm_usuario       nome,
           ds_email         email,
           ds_senha         senha
        FROM tb_usuario WHERE id_usuario = ?
  `
  let res = await con.query(comando, [id])

  return res[0];
}

export async function alterarUsuario(usuario, id) {
  let comando = `
    UPDATE tb_usuario
        SET nm_usuario = ?,
            ds_email = ?,
            ds_senha = ?
        WHERE id_usuario = ?;
  `

  let res = await con.query(comando, [usuario.nome, usuario.email, usuario.senha, id]);
  let info = res[0];
  let linhasAfetadas = info.affectedRows;

  return linhasAfetadas;
}

export async function deletarUsuario(id) {
  let comando = `
    DELETE FROM tb_usuario where id_usuario = ?
  `

  let res = await con.query(comando, [id])
  let info = res[0]

  let linhasAfetadas = info.affectedRows;

  return linhasAfetadas;
}

export async function loginUser(email, senha) {
  console.log("usuario");
  
  let comando =  `
    SELECT * FROM tb_usuario WHERE ds_email = ? AND ds_senha = ?;
  `

  let res = await con.query(comando, [email, senha]);

  return res[0];
}