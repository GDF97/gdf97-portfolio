import { motion } from "framer-motion";

function SkillCard({ skill }) {
  return (
    <motion.div
      className="w-[200px] p-4 relative border border-[#FFFFFF26] bg-[#FFFFFF08] rounded-lg"
      variants={{
        hidden: {
          opacity: 0,
          y: 25,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      <p className="w-full text-center">{skill}</p>

      <div className="absolute -top-2 -right-2 bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.5)] w-[15px] h-[15px] rounded-full" />
    </motion.div>
  );
}

export default SkillCard;
