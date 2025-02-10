import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-start justify-center text-start px-4 
      bg-[url('/img/600x400.svg')] bg-no-repeat bg-center bg-cover min-h-[600px] 
      md:bg-[url('/img/1920x1080.svg')]"
    >
      <div className="container flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold text-white">
          Texto chamativo que ressalte o serviço
        </h1>
        <h2 className="text-6xl font-extrabold text-brand-100 mt-4">
          CORTE E DOBRA
        </h2>
        <p className="text-lg text-white mt-2">Serviços | ADOM Metalúrgica</p>
        <p className="text-2xl mt-4">Um texto de CTA para o botão</p>
        <Link
          href="#whatsapp"
          title="Entre em contato conosco para mais informações"
          className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg text-lg font-semibold shadow-md transition duration-300 w-auto sm:w-1/2 md:1/3 flex items-center gap-2 md:justify-start"
        >
          Fale no WhatsApp
          <IoLogoWhatsapp size={20} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
