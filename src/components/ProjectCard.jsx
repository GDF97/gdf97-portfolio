import { Link } from "react-router-dom";

function ProjectCard({ id, name, s_description, stack, img }) {
  return (
    <Link
      to={`/project/${id}`}
      className="w-full p-2 h-[400px] overflow-hidden bg-[rgba(255,255,255,0.05)] rounded-3xl 
                 md:p-4 md:w-[700px] md:h-[600px] lg:p-4 lg:w-[1200px] lg:h-[800px]"
    >
      <div
        className="w-full h-full p-4 rounded-2xl border border-[#ffffff6e] relative 
        bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[#101010] hover:border-white duration-500 ease-in-out overflow-hidden"
        id="projectid"
      >
        <div className="w-full flex flex-col gap-2 text-white">
          <h1 className="text-xl md:text-2xl lg:text-[32px] font-bold">
            {" "}
            {name}{" "}
          </h1>
          <p className="text-xs md:text-sm"> {s_description} </p>
          <div className="w-full flex flex-wrap gap-1">
            {stack.map((s, index) => (
              <span key={index} className="pr-2 text-xs rounded">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Imagem */}
        <img
          src={img || "https://via.placeholder.com/400"} // Fallback para imagem
          alt={`Imagem do projeto ${name}`}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[305px] max-h-[205px]
                     md:w-[600px] lg:w-[1000px] md:max-h-[365px] lg:max-h-[565px]  rounded-2xl object-cover object-top duration-500"
          id="projectimg"
        />
      </div>
    </Link>
  );
}

export default ProjectCard;
