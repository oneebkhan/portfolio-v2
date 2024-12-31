import React from "react";

const ManyMore = () => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <a className="font-normal text-neutral-700 dark:text-neutral-200" href="https://github.com/oneebkhan/Merger" target="_blank" rel="noopener noreferrer">
            Merger.
          </a>{" "}
          Converts PPT files to PDF, then merges all PDFs in a directory into a 
          single pdf. Made using python and tkinter for the frontend
        </p>
      </div>

       <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <a className="font-normal text-neutral-700 dark:text-neutral-200" href='https://github.com/oneebkhan/SDA_v2' target="_blank" rel="noopener noreferrer">
            SDA extractor.
          </a>{" "}
          Reads JAVA, C++ and C# files. Gets their classes, methods (functions) 
          and variables, prints them into a text file, and then displays 
          said text file.
        </p>
      </div>

      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <a className="font-normal text-neutral-700 dark:text-neutral-200" href='https://github.com/oneebkhan' target="_blank" rel="noopener noreferrer">
            More things on my Github :).
          </a>{" "}
          More projects I've built in my free time, along with solutions to 
          leet code problems and advent of code to practice my DSA. Feel
          free to take a look and star any repo you fancy.
        </p>
      </div>
    </>
  );
};

export default ManyMore;