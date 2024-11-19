import {Router} from 'express'; //importa o roteador
import JogadorController from './app/controllers/JogadorController';

const router = Router(); //inicializa

router.post('/jogadores', JogadorController.store);
export default router; // exportacao da variavel router (assim ele fica disponivel para ser importado)



