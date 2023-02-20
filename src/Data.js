import JavaScript_Icone from "./Assets/JavaScript_Icone.png";
import ReactJS_Icone from "./Assets/ReactJS_Icone.png";
import NodeJS_Icone from "./Assets/NodeJS_Icone.png";
import TypeScript_Icone from "./Assets/TypeScript_Icone.png";
import Sass_Icone from "./Assets/Sass_Icone.png";
import MySQL_Icone from "./Assets/MySQL.png";

import ToDoList from "./Assets/ToDoList.png";
import WeatherApp from "./Assets/WeatherApp.png";
import ReprodutorDeMusica from "./Assets/ReprodutorDeMusica.png";
import TelaDeLoginECadastro from "./Assets/TelaDeLoginECadastro.png";
import PortfolioAntigo from "./Assets/PortfolioAntigo.png";
import BuscadorDeCep from "./Assets/BuscadorDeCep.png";
import ControleDeFinancas from "./Assets/ControleDeFinanças.png";
import VerificadorDeIdade from "./Assets/VerificadorDeIdade.png";


import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const habilidades = [
  {
    id: 1,
    img: ReactJS_Icone,
    title: "React JS",
    text: "React JS é tecnologia que eu tenho focado ultimamente, estou estudando sobre renderização e também estou criando pequenos projetos para colocar no meu github e linkedin.",
  },
  { id: 2, img: Sass_Icone, title: "Sass", text: "sem descrição." },
  {
    id: 3,
    img: JavaScript_Icone,
    title: "JavaScript",
    text: "Bom JavaScript é a tecnologia eu tenho mais conhecimento, isso é fundamental já que as outras tecnologias que eu uso partem dela, eu poderia dizer que eu estou em um nivel intermediario.",
  },
  {
    id: 4,
    img: TypeScript_Icone,
    title: "TypeScript",
    text: "Eu ainda estou estudando aos poucos o TypeScript, ainda preciso construir uma base solida no JavaScript para não ter muitas dificuldades, eu quero usar o TypeScript junto com o React JS.",
  },
  {
    id: 5,
    img: NodeJS_Icone,
    title: "Node JS",
    text: "Node JS não é meu foco atualmente, mas eu quero estudar para conseguir entender como funciona uma API e para melhorar o meu consumo de APIs.",
  },
  { id: 6, img: MySQL_Icone, title: "MySQL", text: "sem descrição." },
];

export const projetos = [
  {
    id: 1,
    img: ControleDeFinancas,
    title: "Controle de finanças",
    text: "Projeto desenvolvido em ReactJS, Sass e LocalStorage. (sem uso de frameworks).",
    link: "https://github.com/Melqui42/Controle-Financeiro",
  },
  {
    id: 2,
    img: BuscadorDeCep,
    title: "Buscador de CEP",
    text: "Projeto desenvolvido em ReactJS, Sass e Axios.",
    link: "https://github.com/Melqui42/Buscador-de-CEP",
  },
  {
    id: 3,
    img: ToDoList,
    title: "Lista de Tarefas",
    text: "Projeto desenvolvido em ReactJS, Sass (sem uso de frameworks).",
    link: "https://github.com/Melqui42/To-do-List",
  },
  {
    id: 4,
    img: VerificadorDeIdade,
    title: "Verificador de idade",
    text: "Projeto desenvolvido em ReactJS, Sass (sem uso de frameworks).",
    link: "https://github.com/Melqui42/Verificador-de-Idade",
  },
  {
    id: 5,
    img: PortfolioAntigo,
    title: "Portfolio Antigo",
    text: "Projeto desenvolvido em ReactJS, Sass (sem uso de frameworks).",
    link: "https://github.com/Melqui42/Meu-Portfolio-Antigo",
  },
  {
    id: 6,
    img: TelaDeLoginECadastro,
    title: "Tela de Login e Cadastro",
    text: "Projeto desenvolvido em ReactJS, Sass e uma API criada por mim.",
    link: "https://github.com/Melqui42/Tela-de-Login-e-Cadastro-com-uso-de-API",
  },
  {
    id: 7,
    img: ReprodutorDeMusica,
    title: "Reprodutor de Música",
    text: "Projeto desenvolvido em ReactJS, Sass (sem uso de frameworks).",
    link: "https://github.com/Melqui42/Reprodutor-de-musica-basico",
  },
  {
    id: 8,
    img: WeatherApp,
    title: "Weather App",
    text: "Projeto desenvolvido em ReactJS, Sass, OpenWeatherMap API, Axios",
    link: "https://github.com/Melqui42/Weather-App",
  },
];

export const redesSociais = [
  {
    id: 1,
    img: <AiFillLinkedin />,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/melquisedeque-martins-54108a25a/",
  },
  {
    id: 2,
    img: <AiFillGithub />,
    title: "Github",
    link: "https://github.com/Melqui42",
  },
  {
    id: 3,
    img: <AiOutlineWhatsApp />,
    title: "WhatsApp",
    metodo: function () {
      window.alert("+55 81 98273-0592");
    },
  },
];

export const itensDeNavegacao = [
  {
    id: 1,
    title: "Início",
    link: "#Home",
  },
  {
    id: 2,
    title: "Sobre Mim",
    link: "#AboutMe",
  },
  {
    id: 3,
    title: "Habilidades",
    link: "#Skills",
  },
  {
    id: 4,
    title: "Projetos",
    link: "#Projects",
  },
];
