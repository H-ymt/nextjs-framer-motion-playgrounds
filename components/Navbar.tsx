"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.xPaddings} text-2xl py-8 relative w-[calc(100%-32px)] md:w-[calc(100%-56px)] xl:w-[1170px] mx-auto`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          <Image alt="search" src="/search.svg" width={24} height={24} />
          <h2 className="font-extrabold text-2xl leading-[30px] text-white">METAVERSUS</h2>
          <Image
            src="/menu.svg"
            alt="menu"
            className="w-[24] object-contain"
            width="24"
            height="24"
          />
        </div>
      </motion.nav>
    </header>
  );
}
