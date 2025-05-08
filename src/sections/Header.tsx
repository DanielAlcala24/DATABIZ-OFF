"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo1 from "@/assets/logosaashorizontal.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header className="sticky top-0 bg-[#11111f] z-20">
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">¡No pierdas tiempo!</p>
        <a href="https://wa.me/5573966479?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios%20DATABIZ" target="_blank"><div className="inline-flex gap-1 items-center">
          <p>Solicita una Demo ahora</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div></a>
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
              <a href="#Pricing" onClick={closeMenu}>Precios</a>
              <a href="#Testimonials" onClick={closeMenu}>Clientes</a>
              <a href="#Contact" onClick={closeMenu}>Contacto</a>
              <a href="/hubspot" onClick={closeMenu}>HubSpot</a>
            </div>
          </div>

          {/* Botones a la derecha en pantallas grandes */}
          <div className="hidden md:flex gap-4">
            <a href="https://wa.me/5573966479?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios/20DATABIZ" target="_blank">
              <button className="bg-[#a2aaad] text-[#000000] px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight" onClick={closeMenu}>
                Solicita una Demo
              </button>
            </a>
            <Link href="https://databiz.mx:300" target="_blank">
              <button className="bg-[#a2aaad] text-[#000000] px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight" onClick={closeMenu}>
                Iniciar sesión
              </button>
              </Link>
          </div>
        </div>

        {/* Menú desplegable para dispositivos móviles con animación */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100vh - 38px)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 text-white/60 items-center md:hidden w-full bg-[#11111f] fixed top-[38px] left-0 z-50 p-4 overflow-y-auto"
          >
            <div className="flex justify-between items-center w-full">
              {/* Logo */}
              <a href="/" className="flex-shrink-0">
                <Image src={Logo1} alt="Saas Logo" width={155} />
              </a>
              
              {/* Botón para cerrar el menú */}
              <button onClick={toggleMenu} className="text-white">
                <MenuIcon className="h-6 w-6 text-white/60" />
              </button>
            </div>
          
            {/* Opciones del menú */}
            <a href="#Services" className="w-full text-center py-2" onClick={closeMenu}>Servicios</a>
            <a href="#Solutions" className="w-full text-center py-2" onClick={closeMenu}>Soluciones</a>
            <a href="#Pricing" className="w-full text-center py-2" onClick={closeMenu}>Precios</a>
            <a href="#Testimonials" className="w-full text-center py-2" onClick={closeMenu}>Clientes</a>
            <a href="#Contact" className="w-full text-center py-2" onClick={closeMenu}>Contacto</a>
            <a href="/hubspot" className="w-full text-center py-2" onClick={closeMenu}>HubSpot</a>
            
            {/* Botones adicionales en el menú */}
            <div className="flex gap-4 w-full justify-center">
              <a href="https://wa.me/5573966479?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios%20DATABIZ" target="_blank">
                <button className="bg-[#a2aaad] text-[#000000] px-4 py-2 rounded-lg font-medium w-full" onClick={closeMenu}>
                  Solicita una Demo
                </button>
              </a>
              <Link href="https://databiz.mx:300" target="_blank">
                <button className="bg-[#a2aaad] text-[#000000] px-4 py-2 rounded-lg font-medium w-full" onClick={closeMenu}>
                  Iniciar sesión
                </button>
              </Link>
            </div>
          </motion.nav>
          
          
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
