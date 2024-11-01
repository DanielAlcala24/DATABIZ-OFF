"use client";

import flecha2 from "@/assets/flecha2.png";
import flecha from "@/assets/flecha.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BarChart, HandCoins, Handshake, PackageOpen, Calculator, Landmark, Factory, Computer, Settings, Wallet, ShoppingBasket, Target, ChevronDown, ChevronUp, ScrollText, House, HeartPulse } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Service extends ServiceCardProps {}

const services: Service[] = [
  {
    icon: HandCoins,
    title: "Ventas",
    description: "Controla el ciclo comercial completo, desde prospectos hasta facturación electrónica, optimizando la cobranza y reduciendo la cartera vencida.",
  },
  {
    icon: Handshake,
    title: "Compras",
    description: "Mejora las condiciones de compra con visibilidad completa de proveedores, gestionando requisiciones, órdenes y facturación.",
  },
  {
    icon: PackageOpen,
    title: "Inventarios",
    description: "Administra inventarios multialmacén, con seguimiento de lotes, fechas de caducidad y fabricación, usando etiquetas y códigos de barras.",
  },
  {
    icon: Calculator,
    title: "Contabilidad",
    description: "Simplifica el proceso contable con asientos automáticos, gestión de impuestos y cierre mensual rápido, generando la contabilidad electrónica fácilmente.",
  },
  {
    icon: Landmark,
    title: "Bancos",
    description: "Gestiona cobranza, pagos y cuentas multimoneda con archivos para banca electrónica, optimizando el tiempo administrativo.",
  },
  {
    icon: Computer,
    title: "Punto de venta",
    description: "Mejora la venta al mostrador, gestiona productos, servicios y descuentos. Facilita facturación y retención de clientes con integración de lealtad.",
  },
  {
    icon: Factory,
    title: "Manufactura",
    description: "Controla órdenes de producción, tiempos y movimientos, optimizando inventarios y costos basados en consumos reales.",
  },
  {
    icon: Settings,
    title: "Mantenimiento",
    description: "Administra órdenes de mantenimiento, controla inventarios de refacciones y mide el desempeño de operadores y proveedores.",
  },
  {
    icon: Wallet,
    title: "Control de gastos",
    description: "Registra los gastos de empleados, aplicando políticas de deducibilidad y integrándolos con contabilidad mediante centros de costos.",
  },
  {
    icon: ShoppingBasket,
    title: "Comercio electrónico",
    description: "Integra ventas en línea y al mostrador con inventarios y catálogos, facilitando la integración de tiendas en línea.",
  },
  {
    icon: Target,
    title: "CRM",
    description: "Gestiona oportunidades comerciales, mantén visibilidad del pipeline y organiza las actividades del equipo de ventas para cerrar más ventas.",
  },
  {
    icon: BarChart,
    title: "Inteligencia de negocios (BI)",
    description: "Explota la información registrada en el sistema mediante reportes y tableros, integrando aplicaciones como Power BI para tomar mejores decisiones.",
  },
  {
    icon: House,
    title: "Inmobiliaria",
    description: "Facilita la gestión de propiedades, arrendamientos y contratos con herramientas para administrar inventarios de inmuebles, precios y seguimiento de inquilinos.",
  },
  {
    icon: HeartPulse,
    title: "Clínica",
    description: "Simplifica la gestión clínica y del personal de salud con herramientas para manejo de expedientes, citas, tratamientos y facturación de servicios médicos.",
  },
  {
    icon: ScrollText,
    title: "Facturación electrónica",
    description: "Cumple con requisitos fiscales para la emisión de comprobantes electrónicos, incluyendo validación de timbres y envío automático al SAT.",
  },
]

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="h-12 w-12 m-auto justify-center text-black-500 mb-4" />
      <h3 className="text-xl m-auto justify-center text-center font-semibold mb-2">{title}</h3>
      <div className="flex items-center justify-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <span className="text-blue-600">{isExpanded ? "Ver menos" : "Ver más"}</span>
        {isExpanded ? <ChevronUp className="h-4 w-4 text-blue-600" /> : <ChevronDown className="h-4 w-4 text-blue-600" />}
      </div>
      {isExpanded && <p className="text-gray-600 mt-2">{description}</p>}
    </div>
  )
}

export const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id= 'Services'
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#a2aaad] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag">Nuestros Servicios</div>
          </div>
          <h2 className="section-title mt-5">
            Aumenta la productividad de tu negocio
          </h2>
          <p className="section-description mt-5">
            Descubre como DATABIZ puede impulsar la eficiencia y el crecimiento de tu empresa con nuestros sistemas.
          </p>
        </div>
        <div className="relative">
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};