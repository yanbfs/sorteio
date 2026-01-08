import terminal from "../ui/terminal"
import Participant from "../model/participant"
import { sleep } from "../utils/sleep"

const TOTAL_TIME = 10_000 // 10 segundos

export default async function drawWithProgress(
  participants: Participant[]
): Promise<Participant> {

  let remaining = [...participants]

  const total = participants.length
  const steps = Math.max(total - 1, 1)
  const delay = TOTAL_TIME / steps

  terminal.clear()
  terminal.bold("🎲 Iniciando sorteio...\n\n")

  // Linha 3 → Barra
  const progressBar = terminal.progressBar({
    width: 40,
    title: "Sorteando",
    percent: true,
    eta: true
  })

  // Linha 4 → Contador fixo
  terminal("\n")
  terminal("Restantes: " + remaining.length + "\n")
  terminal("\n") // separador visual
  terminal.bold("Eliminados:\n")

  while (remaining.length > 1) {
    await sleep(delay)

    const index = Math.floor(Math.random() * remaining.length)
    const [removed] = remaining.splice(index, 1)

    const progress = (total - remaining.length) / steps
    progressBar.update(progress)

    // Atualiza SOMENTE a linha do contador
    terminal.moveTo(1, 5)
    terminal.eraseLine()
    terminal(`Restantes: ${remaining.length}`)

    // Logs livres (terminal rola naturalmente)
    terminal.red(`❌ Eliminado: ${removed.name}\n`)
  }

  progressBar.update(1)
  terminal("\n")

  return remaining[0]
}
