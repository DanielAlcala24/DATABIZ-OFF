"use client";

import flecha2 from "@/assets/flecha2.png";
import flecha from "@/assets/flecha.png";
import cohete from "@/assets/cohete.png";
import cohetevertical from "@/assets/cohetevertical.png";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import launch from "@/assets/image.png";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#a2aaad,#11111f_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px] text-white/60">
            <div className="tag">ERP, CRM, PV</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tigher bg-gradient-to-bl from-[#a2aaad] to-[#a2aaad] text-transparent bg-clip-text mt-6">
              Impulsa tu negocio con DATABIZ
            </h1>
            <p className="text-xl text-[#000] tracking-tight mt-6">
              y toma el control con nuestros software a la medida
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href=""><button className="btn btn-primary">Solicita una Demo</button></a>
              <button className="btn btn-text gap-1">
                <span>leer más</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[470px] md:flex-1 relative">
            <motion.img
              src={cohete.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-2 lg:left-5"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={flecha.src}
              alt="cylinder Image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-39 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={flecha2.src}
              width={220}
              alt="noodleImage"
              className="hidden lg:block absolute top-[300px] left-[350px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
