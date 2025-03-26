"use client";

import Image from "next/image";
import { useState } from "react";
import WhatsappIcon from "@/assets/WhatsappIcon.png";

const WhatsAppLive = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    window.open(
      "https://wa.me/5573966479?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios",
      "_blank"
    );
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 cursor-pointer bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          onClick={handleClick}
        >
          <Image
            src={WhatsappIcon}
            alt="WhatsApp"
            width={24}
            height={24}
            className="transition-transform duration-300 transform hover:scale-105"
          />
          <span className="font-semibold">Contáctanos</span>
        </div>
      )}
    </>
  );
};

export default WhatsAppLive;