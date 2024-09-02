import filmeController from './controller/filmeController.js'
import usuarioController from './controller/UsuarioController.js'

//cria as rotas e define a utilização delas em nosso servidor
export default function adicionarRotas(servidor) {
    servidor.use(filmeController)
    servidor.use(usuarioController)
} 