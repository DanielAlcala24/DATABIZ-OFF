"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Smile, Star, Sun, Heart } from "lucide-react"

const benefits = [
    { icon: Zap, text: "Rápido y Eficiente" },
    { icon: Shield, text: "Seguro y Confiable" },
    { icon: Smile, text: "Fácil de Usar" },
    { icon: Star, text: "Calidad Premium" },
    { icon: Sun, text: "Disponible 24/7" },
    { icon: Heart, text: "Atención Personalizada" },
  ]
  
  export const Benefits  = () => {
    return (
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#11111f] py-24 overflow-x-clip">
        <div className="container mx-auto px-4">
          <h2 className=" text-center mb-8 section-title mt-5">Nuestros Beneficios</h2>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <motion.div
              className="flex gap-8"
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
                  className="flex-none w-64 bg-[#FFFFFF] rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
                >
                  <benefit.icon className="w-12 h-12 text-[#11111f] mb-4" />
                  <p className="text-gray-800 text-center font-medium">{benefit.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    )
  }