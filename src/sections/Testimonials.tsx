"use client";

import LogoAcuariosMichin from "@/assets/LogoAcuariosMichin.png";
import LogoCygnusPPM from "@/assets/LogoCygnusPPM.png";
import LogoJoseCafe from "@/assets/LogoJoseCafe.png";
import LogoJumpin from "@/assets/LogoJumpin.png";
import LogoSintoquim from "@/assets/LogoSintoquim.png";
import LogoSupreme from "@/assets/LogoSupreme.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Con DATABIZ hemos reducido nuestro tiempo de cierre de mes a solo 3 días. Además, ahora tengo la información fiscal y financiera necesaria para tomar decisiones diarias al alcance de la mano. Somos capaces de monitorear el margen de utilidad incluso a nivel de lote de producto, considerando costos de importación, gastos inherentes a las ventas, costos de financiamiento y coberturas. La capacidad multimoneda nos permite tener control financiero y fiscal en todo momento.",
    imageSrc: LogoSintoquim.src,
    name: "Miguel Ángel Marín de la Parra",
    username: "Director General de Industrias Sintoquim y Presidente del Consejo de CANIPEC",
  },
  {
    text: "Logramos un proceso de implantación rápido, y el sistema realmente nos ha permitido crecer de una manera que no habríamos podido con otras herramientas. La facilidad de desarrollo personalizado ha permitido crear interfaces únicas para nuestras necesidades, algo que con cualquier otro ERP habría sido una inversión incosteable. Hoy tenemos control total de nuestro proceso de compras, medimos el desempeño de cada proveedor y cumplimos de manera muy oportuna con nuestros compromisos fiscales y laborales.",
    imageSrc: LogoCygnusPPM.src,
    name: "Arnulfo Bonilla",
    username: "CEO y Cofundador de Grupo Cygnus - Premium Personnel Management",
  },
  {
    text: "Con DATABIZ hemos logrado controlar con precisión nuestra cadena de suministro, cumpliendo con todas las exigencias de entrega de material a nuestros clientes. La implantación del ERP nos permitió estandarizar nuestros procesos y optimizar tanto nuestras compras como nuestro proceso comercial. Además, hemos superado las contingencias cambiarias y reportamos fácilmente a nuestro corporativo en Atlanta, GA, quienes pueden monitorear en tiempo real la operación gracias al acceso en la nube del sistema. Sus capacidades de facturación electrónica y timbrado nos permiten responder a cualquier necesidad del entorno.",
    imageSrc: LogoSupreme.src,
    name: "Joel Rojas Sandoval",
    username: "Subdirector de Supreme Resources Mx",
  },
  {
    text: "Con DATABIZ tenemos control total sobre nuestra venta en mostrador e integramos nuestra venta en línea sin problemas. La solución facilita un proceso de facturación electrónica muy eficiente, cumpliendo con todas las exigencias de nuestra organización.                     La flexibilidad de integración de DATABIZ nos ha permitido conectarnos con torniquetes y sistemas de acceso, garantizando que el aforo de nuestro acuario esté siempre bajo control. El control de compras e inventarios es crucial para nosotros, y DATABIZ lo integra perfectamente sin complicar la operación de nuestro personal.",
    imageSrc: LogoAcuariosMichin.src,
    name: "Arturo Hernández",
    username: "Gerente General de Acuarios Michin",
  },
  {
    text: "DATABIZ es una herramienta sumamente poderosa que nos brinda control total sobre nuestra operación. Desde la gestión de compras e inventarios, hasta la venta al mostrador, manteniendo siempre un estricto control contable. Con DATABIZ gestionamos eventos, accesos y funciones muy específicas de nuestro sector, como control de acceso, etiquetas personalizadas y más.                      DATABIZ nos proporciona información oportuna para tomar decisiones diarias a cualquier nivel, desde análisis que consolidan todas nuestras sucursales, hasta informes detallados que permiten conocer el desempeño de cada producto, servicio y colaborador.                                      La solución nos facilita el control del proceso de pago a proveedores de manera ágil, manteniendo siempre las reglas de aprobación necesarias, y simplificando la información de pagos en nuestro portal de bancos.                    Además, con DATABIZ facilitamos a nuestros clientes el proceso de facturación gracias al kiosco de autofacturación.",
    imageSrc: LogoJumpin.src,
    name: "Sandra Núñez",
    username: "Directora General de Jump In Trampoline Park",
  },
  {
    text: "Hoy, gracias a la funcionalidad de DATABIZ, nuestro proceso de venta al mostrador es altamente eficiente. El módulo de punto de venta ha reducido significativamente el tiempo de espera de nuestros clientes. Las funciones de modificadores sobre producto permiten que nuestros colaboradores ofrezcan proactivamente alternativas adicionales a los clientes, aumentando así los ingresos y la satisfacción de nuestros consumidores. Además, la integración con los distintos módulos permiten obtener la información contable y fiscal que necesitamos para responder oportunamente.",
    imageSrc: LogoJoseCafe.src,
    name: "José Café",
    username: "José Café",
  }
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ 
        translateY: "-50%"
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {/* React Fragment  */}
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={text}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id= 'Testimonials' className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonios</div>
          </div>
          <h2 className="section-title mt-5">Nuestroa casos de éxito</h2>
          <p className="section-description">
          Descubre cómo nuestras soluciones han transformado negocios y superado expectativas.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
