import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="#Services">Servicios</Link>
          <Link href="#Solutions">Soluciones</Link>
          <Link href="#Pricing">Precios</Link>
          <Link href="#Testimonials">Clientes</Link>
          <Link href="#Contact">Contacto</Link>
          <Link href="https://wa.me/5578373467?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios%20DATABIZ" target="_blank">Solicita una Demo</Link>
          <Link href="databiz.mx:300" target="_blank">Iniciar Sesión</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          

        </div>
        <p className="mt-6">
          &copy; 2024 DATABIZ. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
