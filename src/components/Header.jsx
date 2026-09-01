import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "skills", label: "Habilidades" },
];

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = menuItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const viewportCenter = window.innerHeight / 2;

      let closestSection = "home";
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        /*
         * Só considera se a seção estiver na tela.
         */
        if (
          rect.bottom > 0 &&
          rect.top < window.innerHeight &&
          distance < closestDistance
        ) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });

      setActiveSection(closestSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 pt-4">
      <div
        className={`
          w-full mx-auto
          flex items-center justify-center lg:justify-between
          gap-4
          px-3 py-3
          rounded-2xl
          border border-white/10
          backdrop-blur-2xl
          transition-all duration-500

          ${
            scrolled
              ? "bg-[#101010]/75 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              : "bg-[#101010]/30"
          }
        `}
      >
        {/* IDENTIDADE */}
        <a href="#home" className="hidden lg:block min-w-fit text-white">
          <h1 className="text-base ibm-plex-sans-semibold tracking-tight">
            Pedro Silva
          </h1>

          <p className="text-xs ibm-plex-sans-light text-white/40">
            Software Developer
          </p>
        </a>

        {/* MENU */}
        <nav
          role="navigation"
          aria-label="Menu principal"
          className="
            flex items-center
            gap-1
            p-1
            rounded-xl
            border border-white/5
            bg-white/[0.03]
            overflow-hidden
          "
        >
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  relative
                  px-3 md:px-5
                  py-2
                  rounded-lg
                  text-xs md:text-sm
                  text-white/50
                  hover:text-white
                  transition-colors
                  duration-300
                "
              >
                {/* FUNDO DO ITEM ATIVO */}
                {isActive && (
                  <motion.div
                    layoutId="activeMenu"
                    className="
                      absolute
                      inset-0
                      rounded-lg
                      bg-white/[0.08]
                      border border-white/[0.08]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {/* TEXTO */}
                <span
                  className={`
                    relative z-10
                    ${isActive ? "text-white" : "text-white/50"}
                  `}
                >
                  {item.label}
                </span>

                {/* LINHA SUPERIOR */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="
                      absolute
                      top-0
                      left-1/2
                      -translate-x-1/2
                      w-6
                      h-[1px]
                      bg-white
                      rounded-full
                      shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* REDES */}
        <div className="hidden lg:flex items-center gap-1 min-w-fit">
          <a
            href="https://www.linkedin.com/in/pedro-henrique-silva-727b74282/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-3 py-2
              rounded-lg
              text-xs
              text-white/50
              hover:text-white
              hover:bg-white/[0.05]
              transition-all
            "
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/GDF97"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-3 py-2
              rounded-lg
              text-xs
              text-white/50
              hover:text-white
              hover:bg-white/[0.05]
              transition-all
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
