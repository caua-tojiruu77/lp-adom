import React from "react";
import { FaCog, FaBolt, FaTools } from "react-icons/fa";

const features = [
  {
    title: "Aproveitamento otimizado da matéria-prima",
    description:
      "Utilize os materiais de forma eficiente, minimizando desperdícios.",
    icon: <FaCog />,
  },
  {
    title: "Precisão e personalização",
    description:
      "Cortes e dobras altamente precisos sob medida para o cliente.",
    icon: <FaBolt />,
  },
  {
    title: "Melhoria no desempenho da produção",
    description: "Processos ágeis e econômicos para aumentar a produtividade.",
    icon: <FaTools />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative mt-7 md:p-0">
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-8 bg-brand-300 text-white rounded-lg shadow-md text-center overflow-hidden  md:-top-20"
          >
            {/* Ícone como fundo */}
            <div className="absolute top-0 left-36 w-full h-full flex items-center justify-center text-brand-200 opacity-25 text-[200px] pointer-events-none overflow-hidden">
              {feature.icon}
            </div>
            {/* Conteúdo do card */}
            <div className="relative z-10">
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-200">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
