"use client";

import LogoAcuariosMichin from "@/assets/LogoAcuariosMichin.png";
import LogoBeautyHall from "@/assets/LogoBeautyHall.png";
import LogoBellphoria from "@/assets/LogoBellphoria.png";
import LogoBengala from "@/assets/LogoBengala.png";
import LogoBiosistematica from "@/assets/LogoBiosistematica.png";
import LogoBNI from "@/assets/LogoBNI.png";
import LogoBrinCo from "@/assets/LogoBrinCo.png";
import LogoCHS from "@/assets/LogoCHS.png";
import LogoCODIGA from "@/assets/LogoCODIGA.png";
import LogoCredinspira from "@/assets/LogoCredinspira.png";
import LogoCygnusPPM from "@/assets/LogoCygnusPPM.png";
import LogoDentalDistrict from "@/assets/LogoDentalDistrict.png";
import LogoESD from "@/assets/LogoESD.png";
import LogoFertilityCenter from "@/assets/LogoFertilityCenter.png";
import LogoGrupoAbadi from "@/assets/LogoGrupoAbadi.png";
import LogoHairfix from "@/assets/LogoHairfix.png";
import LogoHAL from "@/assets/LogoHAL.png";
import LogoInnohub from "@/assets/LogoInnohub.png";
import LogoJoseCafe from "@/assets/LogoJoseCafe.png";
import LogoJumpin from "@/assets/LogoJumpin.png";
import LogoMacsa from "@/assets/LogoMacsa.png";
import LogoMEdSuites from "@/assets/LogoMEdSuites.png";
import LogoNewCityMedicalPlaza from "@/assets/LogoNewCityMedicalPlaza.png";
import LogoSafePark from "@/assets/LogoSafePark.png";
import LogoSelome from "@/assets/LogoSelome.png";
import LogoSintoquim from "@/assets/LogoSintoquim.png";
import LogoStIsidro from "@/assets/LogoStIsidro.png";
import LogoSupreme from "@/assets/LogoSupreme.png";
import LogoThePark from "@/assets/LogoThePark.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
          <div className="flex justify-center items-center mb-10">
            <div className="tag">Marcas que confían en nosotros</div>
          </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={LogoAcuariosMichin}
              alt="Logo AcuariosMichin"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBeautyHall}
              alt="Logo BeautyHall"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBellphoria}
              alt="Logo Bellphoria"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBengala}
              alt="Logo Bengala"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBiosistematica}
              alt="Logo Biosistematica"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBNI}
              alt="Logo BNI"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBrinCo}
              alt="Logo BrinCo"
              className="logo-ticker-image"
            />
            <Image
              src={LogoCHS}
              alt="Logo CHS"
              className="logo-ticker-image"
            />
            <Image
              src={LogoCODIGA}
              alt="Logo CODIGA"
              className="logo-ticker-image"
            />
            <Image
              src={LogoCredinspira}
              alt="Logo Credinspira"
              className="logo-ticker-image"
            />
            <Image
              src={LogoCygnusPPM}
              alt="Logo CygnusPPM"
              className="logo-ticker-image"
            />
            <Image
              src={LogoDentalDistrict}
              alt="Logo DentalDistrict"
              className="logo-ticker-image"
            />
            <Image
              src={LogoESD}
              alt="Logo ESD"
              className="logo-ticker-image"
            />
            <Image
              src={LogoFertilityCenter}
              alt="Logo FertilityCenter"
              className="logo-ticker-image"
            />
            <Image
              src={LogoGrupoAbadi}
              alt="Logo GrupoAbadi"
              className="logo-ticker-image"
            />
            <Image
              src={LogoHairfix}
              alt="Logo Hairfix"
              className="logo-ticker-image"
            />
            <Image
              src={LogoHAL}
              alt="Logo HAL"
              className="logo-ticker-image"
            />
            <Image
              src={LogoInnohub}
              alt="Logo Innohub"
              className="logo-ticker-image"
            />
            <Image
              src={LogoJoseCafe}
              alt="Logo JoseCafe"
              className="logo-ticker-image"
            />
            <Image
              src={LogoJumpin}
              alt="Logo Jumpin"
              className="logo-ticker-image"
            />
            <Image
              src={LogoMacsa}
              alt="Logo Macsa"
              className="logo-ticker-image"
            />
            <Image
              src={LogoMEdSuites}
              alt="Logo MEdSuites"
              className="logo-ticker-image"
            />
            <Image
              src={LogoNewCityMedicalPlaza}
              alt="Logo NewCityMedicalPlaza"
              className="logo-ticker-image"
            />
            <Image
              src={LogoSafePark}
              alt="Logo SafePark"
              className="logo-ticker-image"
            />
            <Image
              src={LogoSelome}
              alt="Logo Selome"
              className="logo-ticker-image"
            />
            <Image
              src={LogoSintoquim}
              alt="Logo Sintoquim"
              className="logo-ticker-image"
            />
            <Image
              src={LogoStIsidro}
              alt="Logo StIsidro"
              className="logo-ticker-image"
            />
            <Image
              src={LogoSupreme}
              alt="Logo Supreme"
              className="logo-ticker-image"
            />
            <Image
              src={LogoThePark}
              alt="Logo ThePark"
              className="logo-ticker-image"
            />

            {/* second set of logos for animation */}
            <Image
              src={LogoAcuariosMichin}
              alt="Logo AcuariosMichin"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBeautyHall}
              alt="Logo BeautyHall"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBellphoria}
              alt="Logo Bellphoria"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBengala}
              alt="Logo Bengala"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBiosistematica}
              alt="Logo Biosistematica"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBNI}
              alt="Logo BNI"
              className="logo-ticker-image"
            />
            <Image
              src={LogoBrinCo}
              alt="Logo BrinCo"
              className="logo-ticker-image"
            />
            <Image
              src={LogoCHS}
              alt="Logo CHS"
              className="logo-ticker-image"
            />
            <Image
              src={LogoCODIGA}
              alt="Logo CODIGA"
              className="logo-ticker-image"
            />
            <Image
              src={LogoCredinspira}
              alt="Logo Credinspira"
              className="logo-ticker-image"
            />
            <Image
              src={LogoCygnusPPM}
              alt="Logo CygnusPPM"
              className="logo-ticker-image"
            />
            <Image
              src={LogoDentalDistrict}
              alt="Logo DentalDistrict"
              className="logo-ticker-image"
            />
            <Image
              src={LogoESD}
              alt="Logo ESD"
              className="logo-ticker-image"
            />
            <Image
              src={LogoFertilityCenter}
              alt="Logo FertilityCenter"
              className="logo-ticker-image"
            />
            <Image
              src={LogoGrupoAbadi}
              alt="Logo GrupoAbadi"
              className="logo-ticker-image"
            />
            <Image
              src={LogoHairfix}
              alt="Logo Hairfix"
              className="logo-ticker-image"
            />
            <Image
              src={LogoHAL}
              alt="Logo HAL"
              className="logo-ticker-image"
            />
            <Image
              src={LogoInnohub}
              alt="Logo Innohub"
              className="logo-ticker-image"
            />
            <Image
              src={LogoJoseCafe}
              alt="Logo JoseCafe"
              className="logo-ticker-image"
            />
            <Image
              src={LogoJumpin}
              alt="Logo Jumpin"
              className="logo-ticker-image"
            />
            <Image
              src={LogoMacsa}
              alt="Logo Macsa"
              className="logo-ticker-image"
            />
            <Image
              src={LogoMEdSuites}
              alt="Logo MEdSuites"
              className="logo-ticker-image"
            />
            <Image
              src={LogoNewCityMedicalPlaza}
              alt="Logo NewCityMedicalPlaza"
              className="logo-ticker-image"
            />
            <Image
              src={LogoSafePark}
              alt="Logo SafePark"
              className="logo-ticker-image"
            />
            <Image
              src={LogoSelome}
              alt="Logo Selome"
              className="logo-ticker-image"
            />
            <Image
              src={LogoSintoquim}
              alt="Logo Sintoquim"
              className="logo-ticker-image"
            />
            <Image
              src={LogoStIsidro}
              alt="Logo StIsidro"
              className="logo-ticker-image"
            />
            <Image
              src={LogoSupreme}
              alt="Logo Supreme"
              className="logo-ticker-image"
            />
            <Image
              src={LogoThePark}
              alt="Logo ThePark"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
