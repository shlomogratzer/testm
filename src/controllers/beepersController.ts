let id = 0

import  { Request,Response } from 'express';
import {createDb, getallBeepers} from '../dbl/beeperDal'

export const create = async (req:Request, res:Response) =>{
    if(!req.body) return
    const target : Beeper = {
        id: id +1,
        name: req.body.name,
        status: 'manufactured',
        created_at : new Date(),
        detonated_at : 'no detonated',
        latitude : 'no latitude',
        longitude :  'no longitude'
    }
    await createDb(target)
    id ++
    res.send('manufactured beeper suxsessfuly')
}
export const getAll = async(req:Request,res:Response) =>{

    const users =  await getallBeepers()
    res.send(users)
}