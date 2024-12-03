import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Patente from '../models/Patente';

class PatenteController{


    async find(req: Request, res: Response){
        const repository = getRepository(Patente);

        const id = req.params.id;

        const j = await repository.findOne({ where: { id: id as unknown as number } });

        if(j){     
            console.log(j);      
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    }
    async list(req: Request, res: Response){
        const repository = getRepository(Patente);
        const lista = await repository.find();
        return res.json(lista);
    }
}

export default new PatenteController();