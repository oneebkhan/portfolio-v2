import React from "react";
import { Card, Carousel } from "../Carousel";
import flavorwikiBusiness from "../../assets/images/flavorwikiBussiness.png";
import git from "../../assets/images/git.jpg";
import fyp from "../../assets/images/fyp.png";
import Flavorwiki from "./Flavorwiki";
import ManyMore from "./ManyMore";
import MedicineAuthenticator from "./MedicineAuthenticator";

const data = [
  {
    category: "A survey platform that provides rewards and statitical insights",
    title: "Flavorwiki",
    src: flavorwikiBusiness,
    link: "https://tester.flavorwiki.com",
    content: <Flavorwiki />,
  },
  {
    category: "The final year project I built that is used to authenticate medicine",
    title: "Medicine Authenticator.",
    link: "https://github.com/oneebkhan/FYP_Medicine-Authenticator/releases/tag/v1.0",
    src: fyp,
    content: <MedicineAuthenticator />,
  },
  {
    category: "Miscellaneous projects I've built as a hobby",
    title: "Miscellaneous Projects.",
    link: "https://github.com/oneebkhan",
    src: git,
    content: <ManyMore />,
  },
];

const Projects = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="projects">
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Projects.
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Projects;
