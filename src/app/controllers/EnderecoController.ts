import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Endereco from '../models/Endereco';

class EnderecoController{

    async list(req: Request, res: Response){
        const repository = getRepository(Endereco);
        const lista = await repository.find();
        return res.json(lista);
    }
}