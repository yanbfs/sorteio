import loadParticipants from "./functions/loadParticipant"
import drawWithProgress from "./functions/drawWithProgress"
import terminal from "./ui/terminal"

async function main() {
  const participants = loadParticipants("src/data/data.csv")

  if (participants.length === 0) {
    terminal.red("❌ Nenhum participante encontrado.\n")
    return
  }

  const winner = await drawWithProgress(participants)

  terminal.bold.brightGreen("🎉 O AZARADO MAIS SORTUDO É:\n")
  terminal.bold.brightYellow(winner.toString())
  console.log()
}

main()
