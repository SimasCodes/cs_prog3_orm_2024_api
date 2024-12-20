import {Router} from 'express'; //importa o roteador
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
import EnderecoController from './app/controllers/EnderecoController';
const router = Router(); //inicializa



router.get('/endereco/list', EnderecoController.list);
router.post('/endereco/store', EnderecoController.store)
router.delete('/endereco/delete', EnderecoController.delete)

router.get('/listjogador', JogadorController.list);
router.get('/jogador/:nickname', JogadorController.find);
router.post('/loginjogador', JogadorController.login);
router.post('/insertjogador/', JogadorController.store);
router.get('/deletejogador/:nickname', JogadorController.delete);
router.post('/updatejogador/', JogadorController.update);

router.get('/listpatente', PatenteController.list);
router.get('/patente/:id', PatenteController.find);
router.get('/deletepatente/:id', PatenteController.delete);
router.post('/updatepatente/', PatenteController.update);
router.post('/insertpatente/', PatenteController.store);
export default router; // exportacao da variavel router (assim ele fica disponivel para ser importado)



