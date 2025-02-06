"use client";

import { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";

type Inputs = {
  name: string;
  mail: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data: Inputs) => {
    try {
      fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://adommetalurgica.com.br",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            // Limpa o formulário
            setIsOpen(true);
            reset();
          }
        })
        .catch(() => {
          alert("Ocorreu um erro");
        });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("Algo ocorreu. Tente novamente.");
    }

    setMessage(""); // Limpa a mensagem de erro
  };

  return (
    <section>
      <div className="container p-7 z-10 bg-brand-300 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2">
          <div className="mb-4 text-center md:text-left">
            <h2 className="mainTitle">Fale Conosco</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex flex-col gap-6 mb-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Nome
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "O campo Nome é obrigatório",
                })}
                placeholder="Nome"
                className="px-5 py-3 border border-zinc-200 w-full outline-none focus:border-brand-100 transition duration-300"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="mail" className="sr-only">
                E-mail
              </label>
              <input
                type="email"
                {...register("mail", {
                  required: "O campo E-mail é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de e-mail inválido",
                  },
                })}
                placeholder="E-mail"
                className="px-5 py-3 border border-zinc-200 w-full outline-none focus:border-brand-100 transition duration-300"
              />
              {errors.mail && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.mail.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Celular
              </label>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{
                  required: "O campo Celular é obrigatório",
                  pattern: {
                    value: /^\(\d{2}\) \d{5}-\d{4}$/,
                    message: "Formato de telefone inválido",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Celular"
                    maxLength={15}
                    onChange={(e) => {
                      let inputValue = e.target.value.replace(/\D/g, "");
                      inputValue = inputValue.replace(
                        /^(\d{2})(\d)/g,
                        "($1) $2"
                      );
                      inputValue = inputValue.replace(/(\d{5})(\d)/, "$1-$2");
                      field.onChange(inputValue);
                    }}
                    className="px-5 py-3 border border-zinc-200 w-full outline-none focus:border-brand-100 transition duration-300"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="service" className="sr-only">
                Serviços
              </label>
              {errors.service && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Mensagem
            </label>
            <textarea
              {...register("message", {
                required: "O campo Mensagem é obrigatório",
              })}
              rows={5}
              placeholder="Digite sua mensagem"
              className="px-5 py-3 border border-zinc-200 w-full outline-none focus:border-brand-100 transition duration-300"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          {message && <p className="text-center text-sm mt-4">{message}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-brand-100 hover:shadow-lg shadow-md px-5 py-3 text-white uppercase font-title tracking-widest mt-6 transition duration-500"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className="w-full md:w-1/2 h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.9559283155043!3d-37.81720974201313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57707a9c0b29c2c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1617708399557!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <div className="mt-2">
                    <h2 className="text-2xl text-center text-brand-200 mb-3">
                      Contato enviado!
                    </h2>
                    <p className="font-medium text-zinc-700 text-center mb-3">
                      Mensagem enviada!
                    </p>
                  </div>

                  <div className="mt-4 flex place-content-center gap-x-2">
                    <button
                      type="button"
                      className="flex bg-brand-200 rounded-md duration-500 hover:shadow-2xl text-white py-2 px-6 md:px-10 font-semibold shadow-xl mt-3 group outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      OK!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default ContactForm;
