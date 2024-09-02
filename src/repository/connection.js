import mysql from 'mysql2/promise.js'

//configuração da conexão com o banco de dados, passando os dados por meio do arquivo .env para maior segurança e configuração.
let con = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  typeCast: function (field, next) {
    
    if (field.type === 'TINY' && field.length === 1) {
        return (field.string() === '1'); 
    }
    else if (field.type.includes('DECIMAL')) {
      return Number(field.string());
    }
    else {
        return next();
    }
    
  }
})

console.log('--> conexão com db realizada');

export default con;