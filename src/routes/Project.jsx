import React from "react";

const About = ({ nomeDoProjeto, oQueEuFiz, stack, sobreOProjeto }) => {
  return (
    <div className="w-full min-h-screen relative flex justify-center pt-12 md:pt-48">
      <button className="absolute inset-8 flex items-center justify-center gap-2 rounded-full pl-2 py-2 pr-4 bg-[rgb(255,255,255,0.15)] text-white">
        Voltar
      </button>
      <div className="w-fit flex flex-col gap-12 items-center">
        <h1 className="text-white text-4xl shadow-text-1 shadow-text-2">
          {nomeDoProjeto}
        </h1>
        <img
          src="/path/to/image.jpg"
          alt="Imagem do projeto"
          className="w-[300px] sm:w-[400px] lg:w-[800px] rounded"
        />
        <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="w-fit flex flex-col gap-4">
            <div>
              <h1>Meu papel</h1>
              <p className="opacity-50">{oQueEuFiz}</p>
            </div>
            <div className="flex flex-col gap-1 text-white">
              <h1>Tecnologias</h1>
              <div className="max-w-[400px] flex flex-wrap gap-2">
                {stack.map((t, index) => (
                  <div key={index} className="bg-gray-700 p-2 rounded">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-white">
            <h1>Sobre o projeto</h1>
            <p className="opacity-50">{sobreOProjeto}</p>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col items-center">
          <h2>Highlights</h2>
          <h1>Título do Projeto</h1>
          <video controls className="w-full max-w-lg">
            <source src="/path/to/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <img
            src="/path/to/highlight-image.jpg"
            alt="Destaque do projeto"
            className="w-full max-w-lg rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
