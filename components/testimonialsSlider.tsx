"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { IoPersonCircle } from "react-icons/io5";

const testimonials = [
  {
    name: "Cliente 1",
    company: "Empresa 1",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem doloremque error dicta placeat? Iure iste sunt ipsamolestias reiciendis possimus, assumenda modi vero sequi nemoeligendi, quisquam, deleniti autem.",
  },
  {
    name: "Cliente 2",
    company: "Empresa 2",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem doloremque error dicta placeat? Iure iste sunt ipsamolestias reiciendis possimus, assumenda modi vero sequi nemoeligendi, quisquam, deleniti autem.",
  },
  {
    name: "Cliente 3",
    company: "Empresa 3",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem doloremque error dicta placeat? Iure iste sunt ipsamolestias reiciendis possimus, assumenda modi vero sequi nemoeligendi, quisquam, deleniti autem.",
  },
  {
    name: "Cliente 4",
    company: "Empresa 4",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem doloremque error dicta placeat? Iure iste sunt ipsamolestias reiciendis possimus, assumenda modi vero sequi nemoeligendi, quisquam, deleniti autem.",
  },
];

const SliderTestimonials = () => {
  return (
    <section className="relative bg-brand-400 overflow-x-hidden">
      <div className="container flex flex-col md:flex-row items-center gap-9">
        {/* Imagem do lado esquerdo */}
        <div className="w-full md:w-1/2">
          <h2 className="mainTitle">Veja o que nossos clientes acharam:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            exercitationem doloremque error dicta placeat? Iure iste sunt ipsa
            molestias reiciendis possimus, assumenda modi vero sequi nemo
            eligendi, quisquam, deleniti autem.
          </p>
        </div>

        {/* Carrossel de depoimentos com Card Effect */}
        <div className="w-full md:w-1/2">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay, EffectCards]}
            className="relative mySwiperTestimonials"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center min-h-[250px] max-h-[300px]">
                  <div className="flex items-start gap-2 text-brand-100">
                    <BiSolidQuoteLeft className="text-3xl" />
                  </div>
                  <p className="text-gray-700 italic flex-1">
                    {item.testimonial}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <IoPersonCircle className="text-brand-100" size={50} />
                    <div>
                      <p className="text-gray-900 font-bold">{item.name}</p>
                      <p className="text-gray-500 text-sm">{item.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SliderTestimonials;
