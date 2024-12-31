import { motion } from "framer-motion";
import React from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { StyledEmail, StyledGithub, StyledLinkedIn } from "./styles";

const ContactMe = () => {
  return (
    <section
      className="mx-auto max-w-7xl px-10 pb-20 pt-48 text-white"
      id={`contact-me`}
    >
      <div className="mx-auto max-w-[100rem]">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-5xl md:text-6xl lg:text-7xl text-zinc-50 pb-10 flex max-w-5xl justify-between"
        >
          <div className="max-w-4xl">
            Lets Get In
            <br />
            Touch.
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
            <div>You can contact me on the following socials.</div>
            <div className="flex gap-4 pt-4">
              <button
                className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 hover:bg-black hover:border-2 hover:border-[#6b7280] transition-all"
                onClick={() => window.open("https://www.linkedin.com/in/oneeb-khan-6b3b701b0/", "_blank")}
              >
                <StyledLinkedIn />
              </button>
              <button
                className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 hover:bg-black hover:border-2 hover:border-[#6b7280] transition-all"
                onClick={() => window.open("https://github.com/oneebkhan", "_blank")}
              >
                <StyledGithub />
              </button>
              <button
                className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 hover:bg-black hover:border-2 hover:border-[#6b7280] transition-all"
                onClick={() => window.open("mailto:khanoneeb1997@hotmail.com", "_blank")}
              >
                <StyledEmail />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
