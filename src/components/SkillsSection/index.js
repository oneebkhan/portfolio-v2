import { motion } from "framer-motion";
import React from "react";
import AnimatedMarquee from "../AnimatedMarquee";

const SkillsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-10 py-48 mt-48 text-white" id={`skills-section`}>
      <div className="mx-auto max-w-[100rem]">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-5xl md:text-6xl lg:text-7xl text-zinc-50 pb-10 flex max-w-5xl justify-between"
        >
          <div className="max-w-4xl">
            Crafting seamless digital solutions with a focus on user-centric
            design.
          </div>
          <div></div>
        </motion.div>

        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-xl md:text-1xl lg:text-2xl font-light pb-10 flex justify-between"
        >
          <div></div>
          <div className="max-w-4xl md:pr-5 text-zinc-300">
            Hi, I'm Oneeb Khan — a passionate Full-Stack JavaScript Developer
            with 3+ years of experience. I specialize in crafting visually
            appealing, user-centric digital experiences that not only look great
            but function seamlessly. My expertise lies in transforming ideas
            into practical, working applications using modern JavaScript
            frameworks, delivering solutions that truly resonate with users.
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="pt-16"
        key="marquee"
      >
        <AnimatedMarquee
          keyName="marquee"
          text={[
            "React",
            "Nextjs",
            "Redux",
            "Javascript",
            "Typescript",
            "Nodejs",
            "Nestjs",
            "Expressjs",
            "SailsJS",
            "Django",
            "GraphQL",
            "MongoDB",
            "PostgreSQL",
            "SQL",
            "HTML",
            "CSS",
            "Tailwind",
            "Rest",
            "Flutter",
            "Firebase",
            "D3JS",
            "Styled Components",
            "Python",
            "Dart",
            "Git",
          ]}
        />
      </motion.div>

      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        key="reverseMarquee"
      >
        <AnimatedMarquee
          keyName="reverseMarquee"
          reverse={true}
          text={[
            "Frontend Development",
            "Backend Development",
            "System Design",
            "Database Design",
            "Reponsive Design",
          ]}
        />
      </motion.div>
    </section>
  );
};

export default SkillsSection;
