import {Router} from 'express'; //importa o roteador
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';

const router = Router(); //inicializa


router.get('/listjogador', JogadorController.list);
router.get('/jogador/:nickname', JogadorController.find);
router.post('/loginjogador', JogadorController.login);
router.post('/insertjogador/', JogadorController.store);



router.get('/listpatente', PatenteController.list);
router.get('/patente/:id', PatenteController.find);
export default router; // exportacao da variavel router (assim ele fica disponivel para ser importado)



