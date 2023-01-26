import React from "react";

import { BiUser, BiMailSend } from "react-icons/bi";
import {
  IoMdClose,
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosMenu,
} from "react-icons/io";
import { BsBriefcase, BsFolderCheck } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

import foguete from "./Assets/foguete.png";
import minhaFoto from "./Assets/Screenshot_3.png";

import { habilidades, projetos, redesSociais, itensDeNavegacao } from "./Data";

import "./Style.scss";

export default function App() {
  const [dropDown, setDropDown] = React.useState(false);
  const [menuMobile, setMenuMobile] = React.useState(false);
  const [windowWelcome, setWindowWelcome] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 120,
    });
  };

  return (
    <div className="App">
      <header>
        <nav className="NavContainer">
          <menu className="Content">
            <a href="#Home" className="Logo">
              <img src={foguete} alt="" />
              <div>
                <h1>Melqui Martins</h1>
                <p>Rumo ao sucesso🔰</p>
              </div>
            </a>
            <menu>
              <ul className={!menuMobile ? "HideList" : "ShowList"}>
                {itensDeNavegacao.map((Item) => {
                  return (
                    <li className="Item" key={Item.id}>
                      <a href={Item.link} onClick={handleClick}>
                        {Item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <button onClick={() => setMenuMobile(!menuMobile)}>
                <IoIosMenu />
              </button>
            </menu>
          </menu>
          <menu className={!windowWelcome ? "ShowOthers" : "HideOthers"}>
            <div className="Center">
              <p>Seja bem-vindo(a) ao meu Portfolio!!! 👋</p>
              <button onClick={() => setWindowWelcome(!windowWelcome)}>
                <IoMdClose />
              </button>
            </div>
          </menu>
        </nav>
      </header>
      <section className="SectionHome" id="Home">
        <div className="Center">
          <article>
            <span>Desenvolvedor Front-End</span>
            <h1>Olá, eu sou Melqui Martins!</h1>
            <p>
              Olá, me chamo Melquisedeque mas podem me chamar de Melqui, tenho
              17 anos e iniciei meus estudos com programação em 2020 e ao longo
              desse tempo eu tenho estudado tecnologias voltadas para o Front
              End.
            </p>
            <ul className="List">
              <li className="Item">
                <a className="DownloadCV" href="https://drive.google.com/file/d/1ZQZzVsgOP5L68S-cie03jhZgR2X0F6-T/view?usp=share_link" target="_blank">
                  Download CV <AiOutlineDownload className="Icon" />
                </a>
              </li>
              <li className="Item">
                <button
                  className="ButtonDropDown"
                  onClick={() => setDropDown(!dropDown)}
                >
                  {!dropDown ? (
                    <IoIosArrowForward className="Icon" />
                  ) : (
                    <IoIosArrowBack className="Icon" />
                  )}
                </button>

                <ul
                  className={
                    !dropDown ? "HideDropDownList" : "ShowDropDownList"
                  }
                >
                  {redesSociais.map((Item) => {
                    return (
                      <li className="Item" key={Item.id} onClick={Item.metodo}>
                        <a href={Item.link} target="_blank" rel="noreferrer">
                          {Item.img}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </article>
          <img src={minhaFoto} alt="" />
        </div>
      </section>
      <section className="SectionAboutMe" id="AboutMe">
        <div className="Center">
          <div className="Title">
            <h1>Sobre Mim</h1>
            <p>~ Introdução ~</p>
          </div>
          <article>
            <div className="Others">
              <div className="FirstContent">
                <h1>Quer falar comigo?</h1>
                <p>
                  Eu tenho algumas redes sociais como: Instagram, Linkedin e
                  WhatsApp
                </p>

                <ul className="List">
                  {redesSociais.map((Item) => {
                    return (
                      <li className="Item" key={Item.id}>
                        <a
                          href={Item.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={Item.metodo}
                        >
                          {Item.img}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <p>
                  Você tambem pode se comunicar comigo através do meu email.
                </p>
                <button
                  className="DownloadCV"
                  onClick={() =>
                    window.alert("melquisedeque.martins42@gmail.com")
                  }
                >
                  Entre em contato comigo!!! <BiMailSend className="Icon" />
                </button>
              </div>

              <div className="SecondContent">
                <h1>A frase que me motiva:</h1>
                <p>“É em meio a dificuldade que se encontra a oportunidade.”</p>
              </div>
            </div>
            <div className="Content">
              <ul className="List">
                <li className="Item">
                  <div>
                    <BsBriefcase className="Icon" />
                    <h1>Experiência</h1>
                    <p>2 Anos de estudos</p>
                  </div>
                </li>
                <li className="Item">
                  <div>
                    <BsFolderCheck className="Icon" />
                    <h1>Projetos</h1>
                    <p>3 + Completados</p>
                  </div>
                </li>
                <li className="Item">
                  <div>
                    <BiUser className="Icon" />
                    <h1>Suporte</h1>
                    <p>8/5</p>
                  </div>
                </li>
              </ul>
              <p className="Text">
                Tenho foco em desenvolvimento com JavaScript, ReactJS e Saas,
                também tenho estudado tecnologias voltadas para o Back End como
                o Node JS.
              </p>
              <p className="Text">
                Me considero ágil para aprender uma nova Linguagem de
                Programação, estou sempre me preparando para superar novos
                desafios e concluir meus objetivos e estou ansioso para integrar
                na minha primeira oportunidade de trabalho, onde eu posso colher
                conhecimentos e possa aplicar minhas habilidades, se eu pudesse
                me definir em 2 palavras, certamente seria: esforçado e
                otimista.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="SectionSkills" id="Skills">
        <div className="Center">
          <div className="Title">
            <h1>Habilidades</h1>
            <p>~ Tecnologias que estudo ~</p>
          </div>
          <article>
            <ul className="List">
              {habilidades.map((Item) => {
                return (
                  <li className="Item" key={Item.id}>
                    <div>
                      <img src={Item.img} alt="" />
                      <h1>{Item.title}</h1>
                      <p>{Item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </section>
      <section className="SectionProjects" id="Projects">
        <div className="Center">
          <div className="Title">
            <h1>Meus Projetos</h1>
            <p>~ Principais projetos ~</p>
          </div>
          <article>
            <ul className="List">
              {projetos.map((Item) => {
                return (
                  <li className="Item" key={Item.id}>
                    <a href={Item.link} target="_blank" rel="noreferrer">
                      <div className="Card">
                        <img src={Item.img} alt="" />
                        <div>
                          <h1>{Item.title}</h1>
                          <p>{Item.text}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
