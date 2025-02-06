import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="relative h-auto md:h-screen bg-cover bg-center bg-[url('/img/1920x1080.svg')] flex flex-col items-start justify-start text-start px-4">
        <div className="container flex flex-col justify-center h-full">
          <h1 className="text-4xl font-bold text-white">
            Texto chamativo que ressalte o servico
          </h1>
          <h2 className="text-6xl font-extrabold text-brand-100 mt-4">
            CORTE E DOBRA
          </h2>
          <p className="text-lg text-white mt-2">Serviços | ADOM Metalurgica</p>
          <p className="text-2xl mt-4">
            Um texto de CTA para o botao
          </p>
          <Link
            href="#whatsapp"
            title="Entre em contato conosco para mais informacoes"
            className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md transition duration-300 w-auto md:w-1/3 flex items-center gap-2 md:justify-center"
          >
            Fale no WhatsApp
            <IoLogoWhatsapp size={20} />
          </Link>
        </div>
    </section>
  );
};

export default HeroSection;
