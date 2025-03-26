import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Header() {
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollDistance(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMenuItems = () => {
    const isMobile = window.innerWidth < 1024;
    return isMobile
      ? [
          { id: "home", label: "Home", min: 0, max: 600 },
          { id: "about", label: "Sobre", min: 600, max: 900 },
          { id: "projects", label: "Projetos", min: 900, max: 2700 },
          { id: "skills", label: "Habilidades", min: 2700, max: Infinity },
        ]
      : [
          { id: "home", label: "Home", min: 0, max: 830 },
          { id: "about", label: "Sobre", min: 830, max: 1200 },
          { id: "projects", label: "Projetos", min: 1200, max: 4549 },
          { id: "skills", label: "Habilidades", min: 4549, max: Infinity },
        ];
  };

  return (
    <header className="sticky inset-0 w-full p-6 bg-gradient-to-b from-[#101010] to-transparent z-10 overflow-hidden">
      <div className="w-full flex flex-row justify-center lg:justify-between relative">
        {/* Nome e Cargo */}
        <div className="text-white hidden lg:block">
          <h1 className="text-xl ibm-plex-sans-semibold">Pedro Silva</h1>
          <p className="text-lg ibm-plex-sans-light text-[#ffffff70]">
            Software Developer
          </p>
        </div>

        {/* Navegação */}
        <nav
          role="navigation"
          aria-label="Menu principal"
          className="lg:absolute text-white flex items-center gap-4 w-fit py-2 px-3 border border-[#ffff0010] rounded-full bg-[#ffff0005] lg:left-1/2 lg:-translate-x-1/2 backdrop-blur-xl"
        >
          {getMenuItems().map(({ id, label, min, max }) => {
            const isActive = scrollDistance >= min && scrollDistance < max;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`md:w-[100px] text-center rounded-full py-2 px-2 relative ${
                  isActive
                    ? "bg-gradient-to-b from-[#FFFFFF33] to-[#0C0C0C00]"
                    : ""
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 28 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="absolute w-4 sm:w-8 h-[1px] bg-white top-0 left-1/2 -translate-x-1/2 shadow-[0_0_4px_1px_#FFF]"
                  >
                    <div className="w-full h-full shadow-[0_8px_30px_4px_#FFF]"></div>
                  </motion.div>
                )}
              </a>
            );
          })}
        </nav>

        {/* Links Sociais */}
        <div className="text-white lg:flex items-center gap-8 ibm-plex-sans-regular hidden">
          <a
            href="https://www.linkedin.com/in/pedro-henrique-silva-727b74282/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite meu perfil no LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/GDF97"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite meu perfil no GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
