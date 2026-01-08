# 🎲 Projeto Sorteio (Node.js + TypeScript)

Projeto de sorteio via terminal desenvolvido em **Node.js** com **TypeScript**, que lê participantes a partir de um arquivo CSV e realiza eliminações aleatórias com **barra de progresso animada**, exibindo quem foi eliminado até restar apenas o vencedor.

Ideal para estudos de:

* TypeScript
* Manipulação de arquivos (CSV)
* Programação assíncrona
* UX em terminal (CLI)
* Organização de projeto

---

## 🚀 Funcionalidades

* 📄 Leitura de participantes via arquivo `CSV`
* 🎲 Sorteio eliminatório (um participante removido por rodada)
* 📊 Barra de progresso com ETA (tempo estimado)
* ⏱️ Duração total configurada (10 segundos)
* ❌ Exibição dos participantes eliminados
* 🏆 Destaque final para o vencedor
* 🛡️ Máscara automática do e-mail exibido

---

## 📂 Estrutura do Projeto

```
projeto-sorteio/
├── node_modules/
├── src/
│   ├── data/
│   │   └── data.csv
│   ├── functions/
│   │   ├── drawWithProgress.ts
│   │   └── loadParticipant.ts
│   ├── model/
│   │   └── participant.ts
│   ├── ui/
│   │   └── terminal.ts
│   ├── utils/
│   │   └── sleep.ts
│   └── index.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🧾 Formato do Arquivo CSV

O arquivo deve estar localizado em:

```
src/data/data.csv
```

Formato esperado (separado por `;`):

```csv
Nome Completo;email@exemplo.com
Maria Silva;maria@mail.com
João Souza;joao@mail.com
```

* Não deixe linhas vazias
* Um participante por linha

---

## ⚙️ Pré-requisitos

* Node.js **v16 ou superior**
* npm

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/yanbfs/sorteio.git
cd sorteio
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como Executar

Execute o sorteio com:

```bash
npm start
```

O terminal exibirá:

* Barra de progresso do sorteio
* Lista de eliminados
* Vencedor final destacado

---

## 🧠 Funcionamento Interno (Resumo)

1. `loadParticipant.ts`

   * Lê o CSV
   * Converte cada linha em um objeto `Participant`

2. `Participant`

   * Armazena nome e e-mail
   * Mascara automaticamente o e-mail

3. `drawWithProgress.ts`

   * Executa eliminações aleatórias
   * Atualiza barra de progresso
   * Controla tempo total do sorteio
   * Exibe eliminados sem quebrar o layout do terminal

4. `terminal.ts`

   * Centraliza o uso da biblioteca `terminal-kit`

5. `sleep.ts`

   * Controle assíncrono de tempo entre eliminações

---

## ⏱️ Configuração de Tempo

O tempo total do sorteio é definido em:

```ts
const TOTAL_TIME = 10_000 // 10 segundos
```

O tempo entre eliminações é calculado automaticamente com base no número de participantes.

---

## 🧪 Tecnologias Utilizadas

* Node.js
* TypeScript
* terminal-kit
* tsx

---

## 📌 Possíveis Melhorias Futuras

* Parâmetro de velocidade via CLI (`--speed=500`)
* Modo dramático nos últimos participantes 😈
* Exportação do resultado para arquivo
* Testes automatizados
* Interface gráfica

---

## 👤 Autor

**Yan Santos**
📧 [yanstm@gmail.com](mailto:yanstm@gmail.com)
🔗 [https://github.com/yanbfs](https://github.com/yanbfs)

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

Sinta-se à vontade para estudar, modificar e evoluir o código 🚀
