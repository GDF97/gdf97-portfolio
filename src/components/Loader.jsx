import { motion } from "framer-motion";
import { useState } from "react";

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 8 }}
      className="w-full h-screen flex items-center justify-center gap-4 absolute inset-0 z-30 bg-black"
    >
      {[0, 0.2, 0.4].map((delay, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay,
          }}
          className="w-5 h-5 bg-white rounded-full z-40"
        ></motion.div>
      ))}
    </motion.div>
  );
}

export default Loader;
