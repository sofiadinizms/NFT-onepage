<h1 align="center">
  NFT CIn - O jogo
</h1>

<h3 align="center">
  Jogo sobre NFT desenvolvido para a disciplina de Engenharia de Software da UFPE no semeste 2021.2
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/isaquetdiniz/nftcin">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/isaquetdiniz/nftcin">

  <img alt="GitHub" src="https://img.shields.io/github/license/isaquetdiniz/nftcin">
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Tutorial de Instalação>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">Licença</a>
</p>

## 👨🏻‍💻 Sobre o projeto

<h3>
  Escolhas
</h3>

<p>
  O que você diria se alguém te perguntasse qual a temática mais em alta no mundo da tecnologia? Provavelmente NFT. Nos últimos anos, muito é falado sobre conceitos abstratos representando elementos do cotidiano e ainda mais recentemente os NFTs vem tomado foco. Todavia, por mais que boa parte das pessoas saibam que eles existem, poucos conseguiriam explicar o que eles são ou até mesmo qual é o significado da sigla.

  Indo mais a fundo na problemática e no conhecimento sobre NFTs, não é difícil notarmos que os Non-Fungible Tokens não são um conceito novo e que, na verdade, aparecem de várias maneiras nas nossas vidas há muito tempo. Adotando a abordagem do NFT como um elemento de cultura imaterial, propomos uma forma inovadora e gameficada de entende-los de uma forma educativa e visual.
  
  A questão essencial do nosso projeto é conseguir explicar conceitos complexos de uma forma simples e didática. Nessa ótica, objetivamos que nossa aplicação tenha uma linguagem acessível e uma interface limpa para que seja de fácil uso para os mais diversos públicos.
</p>

<h3>
  O resultado
</h3>

<ul>
  <li>Link para o apk beta <a href="https://desafio-trinity-412lgvehq.vercel.app/" target="_blank">aqui</a></li>
</ul>


## 🚀 Tecnologias

Tecnologias que utilizei para construir essa aplicação

- [Tecnologia 1](https://nodejs.org/en/)
- [Tecnologia 2](https://nextjs.org/)


## 💻 Tutorial de Uso

### 1. Install dependencies
Run `yarn install` or `npm install` on both client and server folders, this command will install the project's dependencies.


### 2. Create a env file
Create a file named `.env` and, inside of it, place the contents of the .env page from out Notion page.


### 3. Running in development
To run this project in development mode, we will need to run two servers, the react one on `/client` and keystone on `/server`.

The command to run react is `yarn start` or `npm start` depending on which tool was used on [installation](##1.-install-dependencies), the react server will run on port `3000` by default.

Before running the keystone server, go to `/server/updates/0.0.1-admin.js` and change the admin user as you want, this user will be the first created, but you will be able to create others and delete this one later.

To run keystoneJS server, use the command `node index.js`, the server will run on whatever port is in the variale in the env file, you will find the admin interface in `http://localhost:[PORT]/admin`

### 4. Running in production
To run the server in production, go to `/client` and run the command `yarn server`, this command will create a `react production optimized build` and move it to `/server`.

Then go to `/server` and run `node index.js`, you will find the project on `http://localhost:[PORT]`



- - -

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Isaque Diniz (itd), Pedro Manoel (pmdbma), Sofia Diniz (sdms), Vitória Pinheiro (vps3)👋

- - -

