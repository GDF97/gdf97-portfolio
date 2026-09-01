import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "./TypeWriter";

function About() {
  const [startTyping, setStartTyping] = useState(false);
  const [firstFinished, setFirstFinished] = useState(false);
  const [secondFinished, setSecondFinished] = useState(false);

  const text1 =
    "Profissional de Tecnologia da Informação com formação técnica em Análise e Desenvolvimento de Sistemas e graduação em Ciência da Computação em andamento. Experiência com desenvolvimento web, APIs REST, banco de dados MySQL, testes de software e suporte técnico.";

  const text2 =
    "Experiência como Gerente de Projetos de TI, atuando no acompanhamento de demandas, testes manuais e UAT, suporte a usuários, identificação de bugs e validação de melhorias em sistemas. Perfil analítico, organizado, colaborativo e orientado à resolução de problemas e qualidade.";

  return (
    <motion.div
      className="w-full md:w-fit flex flex-col gap-8 p-2 items-start border border-[#FFFFFF80] rounded-2xl bg-[#FFFFFF0D] md:p-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      onViewportEnter={() => setStartTyping(true)}
    >
      {/* Primeiro texto */}
      <p className="w-full text-xs lg:w-[600px] xl:w-[800px] md:text-xl text-justify">
        <Typewriter
          text={text1}
          speed={10}
          start={startTyping}
          onComplete={() => setFirstFinished(true)}
        />
      </p>

      {/* Segundo texto */}
      <p className="w-full text-xs lg:w-[600px] xl:w-[800px] md:text-xl text-justify">
        <Typewriter
          text={text2}
          speed={10}
          start={firstFinished}
          onComplete={() => setSecondFinished(true)}
        />
      </p>

      {/* Botão */}
      <motion.a
        href="/cv_pedro_silva.docx"
        download
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: secondFinished ? 1 : 0,
          y: secondFinished ? 0 : 10,
        }}
        transition={{
          duration: 0.4,
        }}
        className="text-black rounded-lg px-2 lg:px-8 py-2 bg-white"
      >
        Baixar CV
      </motion.a>
    </motion.div>
  );
}

export default About;
