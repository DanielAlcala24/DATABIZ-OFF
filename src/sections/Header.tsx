"use client";
import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
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
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          No pierdas tiempo
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Solicita una Demo ahora</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <nav className="py-5">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="flex-shrink-0">
            <Image src={Logo} alt="Saas Logo" height={60} width={60} />
          </a>
          {/* Ícono de menú que alterna el estado */}
          <button onClick={toggleMenu} className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </button>

          {/* Menú normal visible en pantallas grandes */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex gap-6 text-black/60">
              <a href="#" onClick={closeMenu}>Servicios</a>
              <a href="#" onClick={closeMenu}>Soluciones</a>
              <a href="#" onClick={closeMenu}>Clientes</a>
              <a href="#" onClick={closeMenu}>Contacto</a>
            </div>
          </div>

          {/* Botones a la derecha en pantallas grandes */}
          <div className="hidden md:flex gap-4">
            <a href="#">
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Solicita una Demo
              </button>
            </a>
            <a href="#">
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Iniciar sesión
              </button>
            </a>
          </div>
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-4 text-black/60 items-center md:hidden w-full bg-white rounded-lg shadow-lg p-4 fixed top-38 left-0 z-50">
            <a href="#" className="w-full text-center py-2 border-b" onClick={closeMenu}>Servicios</a>
            <a href="#" className="w-full text-center py-2 border-b" onClick={closeMenu}>Soluciones</a>
            <a href="#" className="w-full text-center py-2 border-b" onClick={closeMenu}>Clientes</a>
            <a href="#" className="w-full text-center py-2 border-b" onClick={closeMenu}>Contacto</a>
            <div className="flex gap-4 w-full justify-center">
              <a href="#">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight w-full">
                  Solicita una Demo
                </button>
              </a>
              <a href="#">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight w-full">
                  Iniciar sesión
                </button>
              </a>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};
