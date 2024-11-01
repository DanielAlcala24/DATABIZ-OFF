"use client";

import WhatsappIcon from "@/assets/WhatsappIcon.png";
import EmailIcon from "@/assets/EmailIcon.png";
import flecha2 from "@/assets/flecha2.png";
import flecha from "@/assets/flecha.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="Contact"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Contacto</h2>
          <motion.img
            src={flecha.src}
            alt="Arrow Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={flecha2.src}
            alt="Arrow Image 2"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-4 mt-10 justify-center">
          <button
            className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            onClick={() =>
              window.open("mailto:contacto@databiz.com", "_blank")
            }
          >
            <Image
              src={EmailIcon}
              alt="Email Icon"
              width={24}
              height={24}
            />
            Contactar por Correo
          </button>
          <button
            className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
            onClick={() =>
              window.open(
                "https://wa.me/5578373467?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios%20DATABIZ",
                "_blank"
              )
            }
          >
            <Image
              src={WhatsappIcon}
              alt="WhatsApp Icon"
              width={24}
              height={24}
            />
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
