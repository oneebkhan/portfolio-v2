import React from "react";
import { motion } from "framer-motion";

export const List = ({
  id = "genericList",
  listTitle = "List Title",
  items = [],
}) => {
  return (
    <section
      id={`list-${id}`}
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 max-w-[90vw] lg:mx-auto text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans"
      >
        {listTitle}.
      </motion.h1>
      {items.map((item) => {
        return (
          <ListItem
            key={item.title}
            title={item.title}
            subTitle={item.subTitle}
            moreInfo={item.moreInfo}
            date={item.date}
            workDone={item.workDone}
          />
        );
      })}
    </section>
  );
};

const ListItem = ({
  title = "",
  subTitle = "",
  moreInfo = "",
  date = "",
  workDone = [],
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-start justify-between border-b border-zinc-800 px-3 pb-9 gap-4"
    >
      <div>
        <p className="mb-1.5 text-3xl text-zinc-50">{title}</p>
        <p className="text-l uppercase text-zinc-500 pt-1">{subTitle}</p>
        <p className="text-l uppercase text-zinc-500 pt-1">{date}</p>
        <ul className="text-l text-zinc-500 pt-2 list-disc pl-4">
          {workDone.map((work, workIndex) => {
            return (
              <li
                className="text-l text-zinc-500 pt-1"
                key={workIndex}
              >
                {work}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-1.5 text-end text-l uppercase text-zinc-500">
        <p>{moreInfo}</p>
      </div>
    </motion.div>
  );
};
