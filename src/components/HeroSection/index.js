import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

const SECTION_HEIGHT = 1500;
const PARRALAX_IMAGES_START_RANGE = [-200, 200];
const PARRALAX_IMAGES_END_RANGE = [-500, 200];
const PARRALAX_IMAGES_CLASS_NAMES = [
  "ml-24 w-5/12",
  "ml-auto w-1/3",
  "mx-auto w-2/3",
  "w-1/3",
];

const getRandomizedElementFromArray = (items = []) =>
  items[Math.floor(Math.random() * items.length)];

const getRandomNumberFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomizedProps = () => {
  return {
    start: getRandomNumberFromRange(...PARRALAX_IMAGES_START_RANGE),
    end: getRandomNumberFromRange(...PARRALAX_IMAGES_END_RANGE),
    className: getRandomizedElementFromArray(PARRALAX_IMAGES_CLASS_NAMES),
  };
};

export const SmoothScrollHero = ({ pictures = [], mainPicture }) => {
  return (
    <section id="home">
      <Hero mainPicture={mainPicture} pictures={pictures} />
    </section>
  );
};

const Hero = ({ pictures, mainPicture }) => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage mainPicture={mainPicture} />
      <ParallaxImages pictures={pictures} />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = ({ mainPicture }) => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const scale = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["1.7", "1"]);
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  const textOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <React.Fragment>
      <motion.div
        className="sticky top-0 h-screen w-full max-w-[100vw]"
        style={{
          clipPath,
          backgroundSize: "cover",
          maxWidth: "100vw",
          opacity,
          overflow: "hidden",
        }}
      >
        <motion.img
          className="sticky top-0 h-screen w-[100vw]"
          id="hero-image"
          src={mainPicture}
          onLoad={() => {
            document.getElementById("hero-image").style.filter =
              "opacity(100%)";
          }}
          style={{
            objectFit: "cover",
            clipPath,
            filter: "opacity(0%)",
            overflow: "hidden",
            maxWidth: "100vw",
            scale,
            opacity,
            position: 'center',
            transitionProperty: "filter",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "500ms",
          }}
        />
      </motion.div>
      <div className="absolute top-[20vh] left-[4vw] lg:left-[13vw] sm:left-[9vw] z-10">
        <motion.div style={{ opacity: textOpacity }}>
          <h1
            className="text-5xl font-light sm:font-normal xl:text-8xl lg:text-7xl md:text-5xl"
            style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}
          >
            I'm Oneeb
            <br />
            Khan
          </h1>
        </motion.div>
      </div>
      <div className="absolute top-[70vh] right-[4vw] lg:right-[13vw] sm:right-[9vw] z-10">
        <motion.div style={{ opacity: textOpacity }}>
          <h1
            className="text-5xl font-light sm:font-normal xl:text-8xl lg:text-7xl md:text-5xl text-right"
            style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}
          >
            Software
            <br />
            Engineer
          </h1>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

const ParallaxImages = ({ pictures = [] }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {pictures.map((picture, pictureIndex) => {
        const randomizedProps = getRandomizedProps();
        return (
          <ParallaxImg
            key={pictureIndex}
            src={picture}
            alt="Parallax Image"
            start={randomizedProps.start}
            end={randomizedProps.end}
            className={randomizedProps.className}
          />
        );
      })}
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
