<div align="center">

<img src="./assets/wumpa_logo.png" width="350px" alt="WumpaFind Logo">

# 🎬 WumpaFind

### Seu próximo filme começa aqui.

Uma aplicação web para descobrir, pesquisar e explorar filmes,  
desenvolvida com **JavaScript, Node.js, Express e TMDB API**.

<br>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=8B5CF6&center=true&vCenter=true&width=600&lines=Descubra+novos+filmes;Pesquise+seus+favoritos;Confira+avaliacoes;Encontre+sua+proxima+historia)](https://git.io/typing-svg)

<br>

![JavaScript](https://img.shields.io/badge/JavaScript-111827?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-111827?style=for-the-badge&logo=node.js&logoColor=5FA04E)
![Express](https://img.shields.io/badge/Express-111827?style=for-the-badge&logo=express&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-111827?style=for-the-badge&logo=html5&logoColor=E34F26)
![CSS3](https://img.shields.io/badge/CSS3-111827?style=for-the-badge&logo=css3&logoColor=1572B6)
![TMDB](https://img.shields.io/badge/TMDB-111827?style=for-the-badge&logo=themoviedatabase&logoColor=01B4E4)

</div>

---

## ✨ Sobre o projeto

O **WumpaFind** é uma aplicação de descoberta de filmes criada como projeto de estudo e portfólio.

O projeto utiliza dados do **TMDB (The Movie Database)** para permitir que o usuário pesquise filmes, veja produções populares e consulte informações como avaliações, gêneros, duração e sinopse.

Além do frontend, o WumpaFind possui um backend desenvolvido com **Node.js + Express**, responsável pela comunicação com a API e pela proteção do token de acesso.

---

## 🎥 Funcionalidades

🔎 **Pesquisa de filmes**  
Pesquise filmes pelo nome.

🔥 **Filmes populares**  
Filmes populares são carregados automaticamente ao iniciar a aplicação.

🎬 **Detalhes do filme**  
Clique em um filme para visualizar informações adicionais.

⭐ **Avaliações**  
Veja a avaliação média de cada produção.

📅 **Ano de lançamento**  
Confira o ano em que o filme foi lançado.

⏱️ **Duração**  
Veja a duração do filme em horas e minutos.

🎭 **Gêneros**  
Confira os gêneros de cada filme.

📖 **Sinopse**  
Leia a descrição diretamente no WumpaFind.

📱 **Design responsivo**  
Interface adaptada para desktop e dispositivos móveis.

---

## 🎨 Interface

O WumpaFind possui uma interface escura com uma identidade visual baseada em tons de **azul e roxo**.

```text
              💙
             ╱
      W U M P A F I N D
             ╲
              💜

        🎬 Movie Discovery
```

A interface inclui:

- Cards interativos
- Efeitos de hover
- Gradientes
- Modal de detalhes
- Layout responsivo
- Identidade visual própria

---

## 🧠 O que aprendi

Durante o desenvolvimento do WumpaFind, pratiquei conceitos importantes de desenvolvimento web:

```javascript
const aprendizados = [
    "HTML",
    "CSS",
    "JavaScript",
    "Manipulação do DOM",
    "Fetch API",
    "Async / Await",
    "Consumo de APIs REST",
    "Node.js",
    "Express",
    "Variáveis de ambiente",
    "Proteção de API Token",
    "Design responsivo",
    "Git",
    "GitHub"
];
```

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
| :---: | --- |
| 🌐 HTML5 | Estrutura da aplicação |
| 🎨 CSS3 | Interface, animações e responsividade |
| ⚡ JavaScript | Lógica da aplicação |
| 🟢 Node.js | Backend |
| 🚂 Express | Servidor e rotas |
| 🎬 TMDB API | Informações sobre filmes |
| 🔐 dotenv | Variáveis de ambiente |
| 🐙 GitHub | Versionamento e código-fonte |

---

## 📂 Estrutura do projeto

```text
WumpaFind/
│
├── 📁 assets/
│   └── wumpa_logo.png
│
├── 📁 backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

> 🔐 O arquivo `.env` não é enviado ao GitHub para manter o token da API protegido.

---

## 🚀 Como executar

Clone o repositório:

```bash
git clone https://github.com/ryan-nicollas/WumpaFind.git
```

Entre na pasta:

```bash
cd WumpaFind
```

Entre no backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo chamado:

```text
.env
```

Adicione seu token do TMDB:

```env
TMDB_TOKEN=SEU_TOKEN_TMDB
```

Inicie o servidor:

```bash
node server.js
```

Abra no navegador:

```text
http://localhost:3000
```

---

## 🔐 Como a API é protegida?

O token do TMDB não fica diretamente no JavaScript executado pelo navegador.

```text
┌───────────────┐
│   Navegador   │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│   WumpaFind   │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ Node + Express│
└───────┬───────┘
        │
        ▼
┌───────────────┐
│   TMDB API    │
└───────────────┘
```

O servidor acessa o token através de:

```javascript
process.env.TMDB_TOKEN
```

Enquanto o arquivo `.env` permanece fora do repositório através do `.gitignore`.

---

## 🚧 Próximas ideias

```text
❤️  Favoritos
🎞️  Trailers
👥  Elenco
🎯  Recomendações
🔥  Filmes em alta
📺  Séries
🔍  Filtros avançados
🌐  Deploy público
```

---

<div align="center">

## 👨‍💻 Desenvolvido por Ryan Nicollas

Projeto desenvolvido para **estudo, prática e portfólio** durante minha evolução em Desenvolvimento de Sistemas.

<br>

[![GitHub](https://img.shields.io/badge/GitHub-ryan--nicollas-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ryan-nicollas)

<br><br>

<img src="./assets/wumpa_logo.png" width="180px" alt="Wumpa Logo">

### 💙 WUMPAFIND 💜

**Descubra. Pesquise. Assista.**

<br>

⭐ **Gostou do projeto? Deixe uma estrela!**

</div>
