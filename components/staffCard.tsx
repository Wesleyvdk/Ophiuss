"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

interface StaffCardProps {
  id: string;
  imgUrl: string;
  staffName: string;
  title: string;
  age: number;
  about: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const StaffCard: React.FC<StaffCardProps> = ({
  id, // eslint-disable-line no-unused-vars
  imgUrl,
  staffName,
  title,
  age,
  about,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      width={4722}
      height={1689}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {staffName}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <p className="font-normal text-[12px] leading-[20.16px] text-white uppercase">
          {title}
        </p>
        <p className="font-normal text-[12px] leading-[20.16px] text-white uppercase">
          {`age: ${age}`}
        </p>
        <p className="font-normal text-[12px] leading-[20.16px] text-white uppercase">
          {about}
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {staffName}
        </h2>
      </div>
    )}
  </motion.div>
);

export default StaffCard;
