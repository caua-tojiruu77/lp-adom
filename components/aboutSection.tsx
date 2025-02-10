import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section>
      <div className="container flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Sobre o servico</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione omnis, officiis voluptas esse inventore sed. Magnam dolorem mollitia qui omnis quod, quo veritatis consequatur rem perferendis eligendi, neque vero!
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image 
            src="/img/500x500.svg" 
            alt="Descrição da imagem" 
            width={500} 
            height={300} 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
