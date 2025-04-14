"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { exploreStaff } from "../constants";
import { staggerContainer } from "../utils/motion";
import { StaffCard, TitleText, TypingText } from "../components";

const Staff: React.FC = () => {
  const [active, setActive] = useState("staff-1");

  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12`} id="explore">
      <motion.div
        variants={staggerContainer(0.1, 1.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <TypingText title="| The Staff" textStyles="text-center" />
        <TitleText
          title={
            <>
              Our <br className="md:block hidden" /> Founders
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row min-h-[70vh] gap-5">
          {exploreStaff.map((world, index) => (
            <StaffCard
              key={world.id}
              {...world}
              index={index}
              // active={active}
              // handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Staff;
