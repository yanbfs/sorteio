import { permission } from "node:process";
import Participant from "../model/participant";

export default function lastRemaining(participants: Participant[]): Participant{
    let remaining = [...participants]

    for(let i = 0; i<participants.length;i++){
        remaining = removeRandomElement(remaining)
    }

    return remaining[0]
}

function removeRandomElement(participant : Participant[]):Participant[]{
    if (participant.length ===1){
        return participant
    }

    const drawn = Math.floor(Math.random() * participant.length)
    
    participant.splice(drawn, 1)

    return participant
}