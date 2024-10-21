"use client"

import { motion } from "framer-motion"
import { Zap, Shield, ScrollText, Cloud, Handshake, Heart } from "lucide-react"

const benefits = [
    { icon: Zap, text: "Rápido y Eficiente" },
    { icon: Shield, text: "Seguro y Confiable" },
    { icon: Cloud, text: "Solución en la nube" },
    { icon: Handshake, text: "Soporte Especializado" },
    { icon: ScrollText, text: "Facturación electrónica" },
  ]
  
  export const Benefits  = () => {
    return (
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#11111f] py-24 overflow-x-clip">
        <div className="container mx-auto px-4">
          <h2 className=" text-center mb-8 section-title mt-5">Nuestros Beneficios</h2>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <motion.div
              className="flex gap-1"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...benefits, ...benefits].map((benefit, index) => (
                <div
                  key={index}
                  className="flex-none w-64 bg-[transparent] rounded-lg p-1 flex flex-col items-center justify-center"
                >
                  <benefit.icon className="w-12 h-12 text-[#11111f] mb-4" />
                  <p className="text-[#a2aaad] text-center font-medium">{benefit.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    )
  }