"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Mensuales adquiriendo un año",
    monthlyPrice: 490,
    buttonText: "Contrata ahora",
    popular: false,
    inverse: false,
    features: [
      //"Up to 5 project members",
      //"Unlimited tasks and projects",
      //"2GB storage",
      //"Integrations",
      //"Basic support",
    ],
  },
  {
    title: "Mensuales",
    monthlyPrice: 611,
    buttonText: "Contrata ahora",
    popular: true,
    inverse: true,
    features: [
      //"Up to 50 project members",
      //"Unlimited tasks and projects",
      //"50GB storage",
      //"Integrations",
      //"Priority support",
      //"Advanced support",
      //"Export support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id= 'Pricing' className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Precios</h2>
          <p className="section-description mt-5">
            ¡Contamos con los mejores precios del mercado, Solicita tu demo ahora!
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
                key={title}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  
                  
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-gray/50">
                    /Por usuario
                  </span>
                </div>
                <a href="https://wa.me/5573966479?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20sus%20servicios%20DATABIZ" target="_blank"><button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button></a>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
