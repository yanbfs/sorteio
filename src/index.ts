import loadParticipants from "./functions/loadParticipant";
import lastRemaining from "./functions/lastRemaining";
import terminal from "./ui/terminal";

const participants = loadParticipants('src/data/data.csv')
const unlucky = lastRemaining(participants)

terminal.clear()

terminal.white('\n\nO').brightRed(' AZARADO')
terminal.bold.brightGreen (' MAIS SORTUDO').white(' é: \n')
terminal.bold.brightYellow(unlucky.toString())

console.log()