"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Logo1 from "@/assets/logosaas1.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-[#11111f] z-20">
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">¡No pierdas tiempo!</p>
        <div className="inline-flex gap-1 items-center">
          <p>Solicita una Demo ahora</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <nav className="py-3 bg-[#11111f]">
        <div className="container mx-auto flex justify-between items-center ">
          <a href="/" className="flex-shrink-0">
            <Image src={Logo1} alt="Saas Logo" width={150} />
          </a>
          {/* Ícono de menú que alterna el estado */}
          <button onClick={toggleMenu} className="md:hidden">
            <MenuIcon className="h-6 w-6 text-white/60" />
          </button>

          {/* Menú normal visible en pantallas grandes */}
          <div className="hidden md:flex flex-grow justify-center bg-[#11111f]">
            <div className="flex gap-6 text-white/60 ">
              <a href="#Services" onClick={closeMenu}>Servicios</a>
              <a href="#Solutions" onClick={closeMenu}>Soluciones</a>
              <a href="#Testimonials" onClick={closeMenu}>Clientes</a>
              <a href="#Pricing" onClick={closeMenu}>Precios</a>
              <a href="#" onClick={closeMenu}>Contacto</a>
            </div>
          </div>

          {/* Botones a la derecha en pantallas grandes */}
          <div className="hidden md:flex gap-4">
            <a href="https://wa.me/5578373467?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios" target="_blank">
              <button className="bg-[#a2aaad] text-[#000000] px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight" onClick={closeMenu}>
                Solicita una Demo
              </button>
            </a>
            <a href="#">
              <button className="bg-[#a2aaad] text-[#000000] px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight" onClick={closeMenu}>
                Iniciar sesión
              </button>
            </a>
          </div>
        </div>

        {/* Menú desplegable para dispositivos móviles con animación */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 text-white/60 items-center md:hidden w-full bg-[#11111f] rounded-lg shadow-lg p-4 fixed top-38 left-0 z-50"
            >
              <a href="#Services" className="w-full text-center py-2" onClick={closeMenu}>Servicios</a>
              <a href="#Solutions" className="w-full text-center py-2" onClick={closeMenu}>Soluciones</a>
              <a href="#Testimonials" className="w-full text-center py-2" onClick={closeMenu}>Clientes</a>
              <a href="#Pricing" className="w-full text-center py-2" onClick={closeMenu}>Precios</a>
              <a href="#Contact" className="w-full text-center py-2" onClick={closeMenu}>Contacto</a>
              <div className="flex gap-4 w-full justify-center">
                <a href="https://wa.me/5578373467?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios" target="_blank">
                  <button className="bg-[#a2aaad] text-[#000000] px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight w-full" onClick={closeMenu}>
                    Solicita una Demo
                  </button>
                </a>
                <a href="#">
                  <button className="bg-[#a2aaad] text-[#000000] px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight w-full" onClick={closeMenu}>
                    Iniciar sesión
                  </button>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
