"use client";

import flecha2 from "@/assets/flecha2.png";
import flecha from "@/assets/flecha.png";
import cohete from "@/assets/cohete.png";
import cohetevertical from "@/assets/cohetevertical.png";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#11111f] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag">Aumenta tu productividad</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, response, SaaS
            website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product Image" className="mt-10" />
          <motion.img
            src={flecha.src}
            alt="pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY
            }}
          />
          <motion.img
            src={flecha2.src}
            alt="tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
