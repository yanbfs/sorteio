import Participant from "../model/participant";
import fs from 'fs'

export default function loadParticipants(file:string):Participant[]{
    const content = fs.readFileSync(file,'utf-8')
    const lines = content.split('\n')

    const participants = lines
    .filter((l) => l.trim().length>0)
    .map((line) => {
        const [name, email] = line.split(";")
        return new Participant(name.trim(), email.trim())
    })

    return participants
}

