import {Request, Response} from 'express';
class JogadorController {
store(req: Request, res: Response){
return res.send('ok');
}
}
export default new JogadorController();