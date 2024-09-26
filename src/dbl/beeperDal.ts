
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
export const getBeeperById = async(targetId:number | string) =>{
    const beepers:Beeper[] = await jsonfile.readFile(beeperDB)
    if (!beepers || beepers.length === 0) {
        console.log("No beepers found.");
        return null;
    }
    const beeper: Beeper | undefined = beepers.find(target => target.id == targetId);
    
    if (beeper) {
        return beeper;
    } else {
        console.log(`Beeper with ID ${targetId} not found.`);
        return null;
    }
}
export const getBeeperByStatus = async(targetStatus: string) =>{
    const beepers:Beeper[] = await jsonfile.readFile(beeperDB)
    if (!beepers || beepers.length === 0) {
        console.log("No beepers found.");
        return null;
    }
    const beeper: Beeper[] | undefined = beepers.filter(target => target.status === targetStatus);
    
    if (beeper) {
        return beeper;
    } else {
        console.log(`Beeper with ID ${targetStatus} not found.`);
        return null;
    }
}
export const del = async(targetId:number | string) =>{
    const beepers:Beeper[] = await jsonfile.readFile(beeperDB)
    const index = beepers.findIndex(u => u.id == targetId);
    if (index !== -1) {
        beepers.splice(index, 1);
        await jsonfile.writeFile(beeperDB,beepers)
    }
}
export const update = async(target: Beeper) =>{
    const beepers:Beeper[] = await jsonfile.readFile(beeperDB)
    beepers.forEach(beeper => {
        if(target.id === beeper.id){
            beeper.status = target.status
        }
    })
    
    await jsonfile.writeFile(beeperDB,beepers)
       
}