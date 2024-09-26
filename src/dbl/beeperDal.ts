
import fs from 'fs'
import jsonfile from 'jsonfile'
const beeperDB:string = './db/beeperBD'

export const createDb = async(target:Beeper) =>{
    if(!fs.existsSync(beeperDB)){
        await jsonfile.writeFile(beeperDB,[])
    }
    let beepers:Beeper[] = await jsonfile.readFile(beeperDB)
    beepers.push(target)
    await jsonfile.writeFile(beeperDB,beepers) 
}

export const getallBeepers = async() =>{
    
    const beepers:[] = await jsonfile.readFile(beeperDB)
    return beepers
    
}