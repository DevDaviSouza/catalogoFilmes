import con from "./connection.js";

//função que faz a criação do filme no banco de dados
export async function salvarFilme(filme) {
  //definição do comando que deve ser utilizado
  let comando = `
      INSERT INTO tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                     VALUES(?, ?, ?, ?, ?)
      `                  
      //utilização do comando query para passar os values do comando de insert com base no objeto recebido por parametro
      let res = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel])
      
      //capturando a linha do banco da dados recém criada 
      let info = res[0];

      //capturando o id do filme recém criado e retornando-o.
      let idFilme = info.insertId;
      return idFilme;
}

//função que faz o select de filmes com base no nome.
export async function consultarFilmesPorNome(nome) {
  let comando = `
    SELECT id_filme         id,
           nm_filme         nome,
           vl_avaliacao     avaliacao,
           dt_lancamento    lancamento,
           bt_disponivel    disponivel
        FROM tb_filme
        WHERE nm_filme like ?
  `;
  
  //faz a formatação do nome para se adequar as normas do sql no momento da busca
  let res = await con.query(comando, [ '%' + nome + '%']);

  //retorna a linha completa.
  return res[0];
}

export async function consultarFilmePorNome(nome) {
  let comando = `
    SELECT id_filme         id,
           nm_filme         nome,
           vl_avaliacao     avaliacao,
           dt_lancamento    lancamento,
           bt_disponivel    disponivel
        FROM tb_filme
        WHERE nm_filme = ?
  `;
  
  //faz a formatação do nome para se adequar as normas do sql no momento da busca
  let res = await con.query(comando, [nome]);

  //retorna a linha completa.
  return res[0];
}

//função que faz o select de filmes com base no id.
export async function consultarFilmesPorId(id) {
  let comando = `
    SELECT id_filme         id,
           nm_filme         nome,
           ds_sinopse       sinopse,
           vl_avaliacao     avaliacao,
           dt_lancamento    lancamento,
           bt_disponivel    disponivel,
           img_filme        img
        FROM tb_filme
        WHERE id_filme = ?
  `;
  
  //faz a formatação do nome para se adequar as normas do sql no momento da busca
  let res = await con.query(comando, [id]);

  //retorna a linha completa.
  let registros = res[0];
  return registros
}

export async function alterarFilme(filme, id) {
  let comando = `
        UPDATE tb_filme
           SET nm_filme = ?,
               ds_sinopse = ?,
               vl_avaliacao = ?,
               dt_lancamento = ?,
               bt_disponivel = ?
        WHERE id_filme = ?;
  `
  let res = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, id]);
  let info = res[0];
  let linhasAfetadas = info.affectedRows;

  return linhasAfetadas;
}

export async function deletarFilme(id) {
  let comando = `
    DELETE FROM tb_filme WHERE id_filme = ?;
  `

  let res = await con.query(comando, [id]);
  let info = res[0];
  let linhasAfetadas = info.affectedRows;

  return linhasAfetadas;
}