import {Router} from 'express'; //importa o roteador
import JogadorController from './app/controllers/JogadorController';

const router = Router(); //inicializa


router.get('/listjogador', JogadorController.list);
router.get('/jogador/:nickname', JogadorController.find);


export default router; // exportacao da variavel router (assim ele fica disponivel para ser importado)



