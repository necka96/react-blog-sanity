import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../animation";
export const Text = ({ text, textStyles }) => (
  <motion.p variants={textContainer} className={`text-center ${textStyles}`}>
    {Array.from(text).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
