import './utils/global.js'

import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

//import do arquivo de rotas
import adicionarRotas from './rotas.js';

//cria o servidor e aplica a permissão para utilizar json e ser requisitado de outros dominios
const servidor = express();
servidor.use(cors());
servidor.use(express.json());

//configura as rotas
adicionarRotas(servidor)

//define a porta e a mensagem da porta utilizada
const PORTA = process.env.PORT;
servidor.listen(PORTA, () => console.log( `--> API subiu na porta ${PORTA}`))