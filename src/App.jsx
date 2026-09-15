import { motion } from "framer-motion";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
import SkillCard from "./components/SkillCard";
import blogbanner from "./assets/blogbanner.png";
import vfv from "./assets/vfv.png";
import signaux from "./assets/signaux.png";
import ideal from "./assets/ideal.png";
import frontendmentor from "./assets/frontendmentor.png";
import About from "./components/About";
import TypeWwriter from "./components/TypeWriter";

function App() {
  const [startHeaderTyping, setStartHeaderTyping] = useState(false);
  const [firstHeaderFinished, setFirstHeaderFinished] = useState(false);
  const [secondHeaderFinished, setSecondHeaderFinished] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const liItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const [projects, setProject] = useState([
    {
      name: "IDEAL MATERIAIS LP - Itariri",
      s_description:
        "Site institucional para uma loja de materiais de construção situada em itariri",
      stack: ["React", "TypeScript", "Framer Motion"],
      img: ideal,
      url: "https://github.com/GDF97/ideal-landing-page",
    },
    {
      name: "Blog97 GDF",
      s_description: "Blog pessoal inspirado no famoso site MySpace",
      stack: ["HTML", "CSS", "PHP", "MYSQL"],
      img: blogbanner,
      url: "https://blog97gdf.com.br/",
    },
    {
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
      url: "https://github.com/GDF97/VintageFilmVault-info",
    },
    // {
    //   name: "GoodMovies97",
    //   s_description:
    //     "Site no qual é possível realizar uma busca de informações de um determinado filme",
    //   stack: ["React", "TypeScript", "SCSS"],
    //   img: "https://raw.githubusercontent.com/GDF97/good-movie-97/refs/heads/main/public/image.png",
    //   url: "https://github.com/GDF97/good-movie-97",
    // },
    // {
    //   name: "FrontEndMentor projects",
    //   s_description: "Site que mostra todos os meus projetos do FrontEndMentor",
    //   stack: ["React", "CSS"],
    //   img: frontendmentor,
    //   url: "https://front-end-mentor-display-projects.vercel.app/",
    // },
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
    "TypeScript",
    "PHP",
    "TailwindCSS",
    "Python",
    "ReactJS",
    "Laravel",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "Git",
    "Figma",
  ]);

  return (
    <div className={`w-full relative `}>
      <Header />

      <main className="w-full min-h-screen pt-4 px-4 lg:px-12 pb-24 flex flex-col gap-12 font-ibm relative 2xl:px-24 md:pb-48 ">
        <motion.section
          className="w-full min-h-[85vh] flex items-center justify-center flex-col text-center gap-4 relative"
          id="home"
          onViewportEnter={() => setStartHeaderTyping(true)}
        >
          <h1 className="text-2xl sm:text-5xl text-white ibm-plex-sans-medium">
            <TypeWwriter
              text={"Desenvolvedor de Software"}
              speed={15}
              start={startHeaderTyping}
              onComplete={() => setFirstHeaderFinished(true)}
            />
          </h1>
          <p className="w-full text-sm xs:text-2xl text-white ibm-plex-sans-regular md:w-[500px]">
            <TypeWwriter
              text={
                " Criando soluções digitais completas com inovação e eficiência."
              }
              speed={15}
              start={firstHeaderFinished}
              onComplete={() => setSecondHeaderFinished(true)}
            />
          </p>
        </motion.section>
        <section className="w-full flex flex-col gap-4" id="about">
          <div className="flex items-center gap-4">
            <div className="w-[12px] h-[12px] bg-white shadow-[0_0_4px_1px_#FFF] rounded-full"></div>
            <h1 className="text-xl ibm-flex-sans-extralight text-[#FFFFFF80]">
              Sobre Mim{" "}
            </h1>
          </div>
          <div className="w-full min-h-[50vh] flex flex-col gap-2 text-white">
            <About />
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
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              {hSkills.map((s, index) => (
                <SkillCard skill={s} key={index} />
              ))}
            </motion.div>
            <div className="w-full xl:w-[900px] flex flex-col gap-4 items-start border border-[#ffffff50] rounded-2xl bg-[#ffffff05] p-4">
              <h1 className="text-xl text-[#ffffff50]">SoftSkills</h1>
              <motion.ul
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                {softSkills.map((s, index) => (
                  <motion.li
                    key={index}
                    className="ml-4 list-disc"
                    variants={liItemVariants}
                  >
                    {s}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
