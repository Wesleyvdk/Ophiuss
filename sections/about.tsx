"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => (
  <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.1, 1.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col`}
    >
      <TypingText title="| About Ophiussa" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Ophiussa Esports</span> is a{" "}
        <span className="font-extrabold text-white">Portuguese</span>{" "}
        organization founded in 2021 by NextFox, Deimo63, Wavey and Jesse. One
        of our objectives is to bring Portuguese players into the European
        scene, as well as providing a fun and competitive ambient for everyone,
        Portuguese or not. Ophiussa is the ancient name given by the ancient
        Greeks to what is now Portuguese territory near the mouth of the river
        Tagus. It means "Land of Serpents". Right now, we are only involved in
        the Rocket League scene, having both pre-made teams and ERS teams.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
