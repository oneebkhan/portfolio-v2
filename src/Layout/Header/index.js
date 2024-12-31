import React from "react";
import { HeaderContainer } from "./styles";
import resume from "../../assets/documents/Oneeb_Khan_SoftwareEngineer.pdf";
import LogoImage from "../../assets/images/logo.png";

import { HeaderDock } from "../../components/HeaderDock";
import {
  TbAntennaBars5,
  TbClock,
  TbFileCv,
  TbHome,
  TbListCheck,
  TbRobot,
} from "react-icons/tb";

const goToSection = (title = "") =>
  document.getElementById(title)?.scrollIntoView({
    behavior: "smooth",
  });

const Header = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <TbHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: () => goToSection("home"),
    },
    {
      title: "Download Resume",
      icon: (
        <TbFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: () => window.open(resume, "_blank"),
    },
    {
      title: "Skills",
      icon: (
        <TbAntennaBars5 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: () => goToSection("skills-section"),
    },
    {
      title: "Experience",
      icon: (
        <TbClock className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: () => goToSection("list-experience"),
    },
    {
      title: "Projects",
      icon: (
        <TbListCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: () => goToSection("projects"),
    },
    {
      title: "Contact Me",
      icon: (
        <TbRobot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: () => goToSection("contact-me"),
    },
  ];

  return (
    <HeaderContainer>
      <div className="ml-4">
        <img
          src={LogoImage}
          alt="myLogo"
          onClick={() => goToSection("home")}
          className="w-10 h-10 cursor-pointer"
        />
      </div>
      {/* <div className="flex items-center justify-center w-full"></div> */}
      <div className="flex items-center gap-4 pr-4">
        <HeaderDock items={links} />
        {/* <div
          className="cursor-pointer"
          onClick={() => {
            window.open(resume, "_blank");
          }}
        >
          Download Resume
        </div>
         <div
          className="cursor-pointer"
          onClick={() => goToSection("skills-section")}
        >
          Skills
        </div>
        <div
          className="cursor-pointer"
          onClick={() => goToSection("list-experience")}
        >
          Experience
        </div>
        <div
          className="cursor-pointer"
          onClick={() => goToSection("projects")}
        >
          Projects
        </div>
        <div
          className="cursor-pointer"
          onClick={() => goToSection("contact-me")}
        >
          Contact Me
        </div> */}
      </div>
    </HeaderContainer>
  );
};

export default Header;
