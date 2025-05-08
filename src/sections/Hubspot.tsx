"use client";

import hubspot from "@/assets/Hubspot.png";
import WhatsappIcon from "@/assets/WhatsappIcon.png";
import EmailIcon from "@/assets/EmailIcon.png";
import flecha2 from "@/assets/flecha2.png";
import flecha from "@/assets/flecha.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hubspot = () => {
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
          <h2 className="section-title">HubSpot Partner</h2>
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
          <div className="flex justify-center items-center h-[200px]">
          <motion.img
            src={hubspot.src}
            alt="Arrow Image"
            width={50}
            style={{ translateY }}
            className=""
          />
          </div>

          <p className="section-description">
            Coming soon...
          </p>
        </div>
        
      </div>
    </section>
  );
};
