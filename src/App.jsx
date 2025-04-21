import { Link } from "react-router-dom";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
import SkillCard from "./components/SkillCard";
import Loader from "./components/Loader";
import restapicountries from "./assets/restapicountries.png";
import vfv from "./assets/vfv.png";
import signaux from "./assets/signaux.png";
import frontendmentor from "./assets/frontendmentor.png";

function App() {
  const [projects, setProject] = useState([
    {
      id: 1,
      name: "SignAux",
      s_description:
        "TCC - Uma aplicação que transcreve a Libras para texto em tempo real.",
      stack: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "NodeJS",
        "Express",
        "MySQL",
        "Python",
        "MediaPipe",
        "TensorFlow",
      ],
      img: signaux,
      url: "https://github.com/signaux-devs",
    },
    {
      id: 2,
      name: "VintageFilmVault",
      s_description: "Uma locadora de filmes antigos",
      stack: [
        "React",
        "TypeScript",
        "SCSS",
        "Axios",
        "StyledComponents",
        "PHP",
        "MySQL",
      ],
      img: vfv,
      url: "https://github.com/GDF97/VintageFilmVault-frontend",
    },
    {
      id: 3,
      name: "GoodMovies97",
      s_description:
        "Site no qual é possível realizar uma busca de informações de um determinado filme",
      stack: ["React", "TypeScript", "SCSS"],
      img: "https://raw.githubusercontent.com/GDF97/good-movie-97/refs/heads/main/public/image.png",
      url: "https://github.com/GDF97/good-movie-97",
    },
    {
      id: 4,
      name: "Rest API Countries",
      s_description: "Site que utiliza uma API que mostra os países do mundo",
      stack: ["React", "TypeScript", "SCSS"],
      img: restapicountries,
      url: "https://rest-api-countries-iota.vercel.app/",
    },
    {
      id: 5,
      name: "FrontEndMentor projects",
      s_description: "Site que mostra todos os meus projetos do FrontEndMentor",
      stack: ["React", "CSS"],
      img: frontendmentor,
      url: "https://front-end-mentor-display-projects.vercel.app/",
    },
  ]);

  const [softSkills, setSoftSkills] = useState([
    "Demonstrar entusiasmo no trabalho.",
    "Aprender novas habilidades rapidamente.",
    "Tomar decisões sob pressão.",
    "Ser proativo em encontrar soluções.",
    "Identificar soluções criativas e viáveis.",
    "Flexibilidade para trabalhar com diferentes perfis de pessoas.",
  ]);

  const [hSkills, setHskills] = useState([
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "C#",
    "Python",
    "TailwindCSS",
    "ReactJS",
    "NextJS",
    "MySQL",
    "NodeJS",
    "ExpressJS",
    "VSCode",
    "Visual Studio",
    "NeoVim",
    "Git",
    "GitHub",
    "Figma",
  ]);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 8000);
  }, []);

  return (
    <div className={`w-full relative `}>
      {loader && <Loader />}
      <Header />

      <main className="w-full min-h-screen pt-4 px-4 lg:px-12 pb-24 flex flex-col gap-12 font-ibm relative 2xl:px-24 md:pb-48 ">
        <section
          className="w-full min-h-[85vh] flex items-center justify-center flex-col text-center gap-4 relative"
          id="home"
        >
          <h1 className="text-2xl sm:text-5xl text-white ibm-plex-sans-medium">
            Desenvolvedor de Software
          </h1>
          <p className="w-full text-sm xs:text-2xl text-white ibm-plex-sans-regular md:w-[500px]">
            Criando soluções digitais completas com inovação e eficiência.
          </p>
        </section>
        <section className="w-full flex flex-col gap-4" id="about">
          <div className="flex items-center gap-4">
            <div className="w-[12px] h-[12px] bg-white shadow-[0_0_4px_1px_#FFF] rounded-full"></div>
            <h1 className="text-xl ibm-flex-sans-extralight text-[#FFFFFF80]">
              Sobre Mim{" "}
            </h1>
          </div>
          <div className="w-full flex flex-col gap-2 text-white">
            <div className="w-full md:w-fit flex flex-col gap-8 p-2 items-start border border-[#FFFFFF80] rounded-2xl bg-[#FFFFFF0D] md:p-4">
              <p className="w-full text-base lg:w-[600px] xl:w-[800px] md:text-xl text-justify">
                {" "}
                Olá Mundo! Meu nome é Pedro Silva e sou estudante de
                Desenvolvimento de Sistema na Etec de Peruibe. Sou bastante
                apaixonado pelo mundo da programação e sempre busco aprender
                novas tecnologias.{" "}
              </p>
              <a
                href="/cv_pedro_silva.docx"
                className="text-black rounded-lg px-2 lg:px-8 py-2 bg-white"
                download
              >
                Baixar CV
              </a>
            </div>
            {/* <Link to={"/about"} className="w-full lg:w-fit">
              Ver mais sobre mim
            </Link> */}
          </div>
        </section>
        <section className="w-full flex flex-col gap-4" id="projects">
          <div className="flex items-center gap-4">
            <div className="w-[12px] h-[12px] bg-white shadow-[0_0_4px_1px_#FFF] rounded-full"></div>
            <h1 className="text-xl ibm-flex-sans-extralight text-[#FFFFFF80]">
              Projetos
            </h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 text-white">
            {projects.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col gap-4" id="skills">
          <div className="flex items-center gap-4">
            <div className="w-[12px] h-[12px] bg-white shadow-[0_0_4px_1px_#FFF] rounded-full"></div>
            <h1 className="text-xl ibm-flex-sans-extralight text-[#FFFFFF80]">
              Habilidades
            </h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hSkills.map((s, index) => (
                <SkillCard skill={s} key={index} />
              ))}
            </div>
            <div className="w-full xl:w-[900px] flex flex-col gap-4 items-start border border-[#ffffff50] rounded-2xl bg-[#ffffff05] p-4">
              <h1 className="text-xl text-[#ffffff50]">SoftSkills</h1>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                {softSkills.map((s, index) => (
                  <li key={index}>{s}</li>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
