import React from "react";
import Marquee from "react-fast-marquee";

const AnimatedMarquee = ({ text = [], reverse = false, keyName = "" }) => {
  return (
    <Marquee
      gradient
      gradientColor="rgb(9, 9, 11)"
      gradientWidth={100}
      direction={reverse ? "left" : "right"}
    >
      {text.map((t) => (
        <div
          key={t + keyName}
          className="px-6 py-6 md:px-8 lg:px-10 xl:px-14 uppercase font-extralight text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl"
        >
          {t}
        </div>
      ))}
    </Marquee>
  );
};

export default AnimatedMarquee;
