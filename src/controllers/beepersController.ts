let id = 0

import  { Request,Response } from 'express';
import {createDb, getallBeepers,getBeeperById, getBeeperByStatus,del,update} from '../dbl/beeperDal'

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

    const targets =  await getallBeepers()
    res.send(targets)
}
export const getById = async(req:Request,res:Response) =>{
    const target = await getBeeperById(req.params.id)
    res.send(target)
}
export const getByStatus = async(req:Request,res:Response) =>{
    const target = await getBeeperByStatus(req.params.status)
    res.send(target)
}
export const deleteBeeper = async(req:Request,res:Response) =>{
    const target = await del(req.params.id)
    res.send('beeper is deleted')
}
export const changeStatus = async(req:Request,res:Response) =>{
    const target = await getBeeperById(req.params.id)
    if(target){
        target.status = req.body.status
        if(req.body.status === "deployed"){
            setTimeout(async() => {
                target.status = "detonated"
                target.detonated_at = new Date()
                await update(target) 
            }, 10000);
        }
        await update(target)
        const newTarget = await getBeeperById(req.params.id)
        res.send(newTarget)
    }
    
}