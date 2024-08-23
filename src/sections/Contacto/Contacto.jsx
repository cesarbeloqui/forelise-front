import { useState } from "react";
import { useRef } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

const Contacto = () => {
    const form = useRef();
    const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
      const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;
      const [enviando, setEnviando] = useState(false);
      const [enviado, setEnviado] = useState(false);
      const [noEnviado, setNoEnviado] = useState(false);
      const [mostrarBoton, setMostrarBoton] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();
    // Aquí deberías recoger los datos del formulario
    const form2 = form.current; // Sustituye con los datos del formulario

    setEnviando(true);
    setEnviado(false);
    setNoEnviado(false);
    setMostrarBoton(false); // Oculta el botón al enviar

    /*     simulateSendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, {
      publicKey: YOUR_PUBLIC_KEY,
    })
      .then(() => {
        setEnviado(true);
        setEnviando(false);
        form2.reset();
        setMostrarBoton(true);
      })
      .catch(() => {
        setNoEnviado(true);
        setEnviando(false);
        setTimeout(() => {
          setNoEnviado(false); // Oculta el mensaje de error después de un tiempo
          setMostrarBoton(true); // Muestra el botón nuevamente
        }, 3000); // Tiempo en milisegundos (3000 ms = 3 segundos)
      }); */
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          setEnviado(true);
          setEnviando(false);
          form2.reset();
          setMostrarBoton(true);
        },
        () => {
          setNoEnviado(true);
          setEnviando(false);
          setTimeout(() => {
            setNoEnviado(false); // Oculta el mensaje de error después de un tiempo
            setMostrarBoton(true); // Muestra el botón nuevamente
          }, 3000); // Tiempo en milisegundos (3000 ms = 3 segundos)
        }
      );
  };
  return (
    <section
      id="contacto"
      className="bg-fondoBeige min-h-[80vh] flex items-center justify-center"
    >
      <div className="w-full max-w-2xl px-8 space-y-2  ">
        <h2 className="text-3xl font-medium text-left text-letraMarron">
          Contacto
        </h2>
        <p className="text-left text-sm text-gray-600">
          Escribinos a{" "}
          <a
            href="mailto:info@confiteriaforelise.com"
            className="text-naranjaNav italic"
          >
            info@confiteriaforelise.com
          </a>{" "}
          o completá el formulario:
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="hidden">
                Nombre y Apellido
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none shadow-sm focus:outline-none focus:ring-naranjaNav focus:border-naranjaNav ring-naranjaNav placeholder:text-placeholderColor placeholder:focus:text-placeholderColorFocus"
                placeholder="Nombre y Apellido"
                required
                maxLength={20}
                minLength={5}
              />
            </div>
            <div>
              <label htmlFor="email" className="hidden">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none shadow-sm focus:outline-none focus:ring-naranjaNav focus:border-naranjaNav ring-naranjaNav placeholder:text-placeholderColor placeholder:focus:text-placeholderColorFocus"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="hidden">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none shadow-sm focus:outline-none focus:ring-naranjaNav focus:border-naranjaNav ring-naranjaNav placeholder:text-placeholderColor placeholder:focus:text-placeholderColorFocus"
                placeholder="Teléfono"
                maxLength={20}
                minLength={5}
                required
              />
            </div>
            <div>
              <label htmlFor="reason" className="hidden">
                Motivo
              </label>
              <input
                type="text"
                id="reason"
                name="reason"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none shadow-sm focus:outline-none focus:ring-naranjaNav focus:border-naranjaNav ring-naranjaNav placeholder:text-placeholderColor placeholder:focus:text-placeholderColorFocus"
                placeholder="Motivo"
                maxLength={20}
                minLength={5}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="hidden">
              Mensaje, consulta o sugerencia
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none shadow-sm focus:outline-none focus:ring-naranjaNav focus:border-naranjaNav ring-naranjaNav placeholder:text-placeholderColor placeholder:focus:text-placeholderColorFocus resize-none"
              placeholder="Mensaje, consulta o sugerencia"
              required
            ></textarea>
          </div>
          <div>
            {mostrarBoton && (
              <button
                type="submit"
                disabled={enviado || enviando}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-naranjaBotonYSubProductos hover:bg-naranjaNav focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-naranjaBotonYSubProductos"
              >
                Enviar mensaje
              </button>
            )}
            {enviado && (
              <p className="flex flex-row justify-center mt-3">
                Enviado <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </p>
            )}
            {enviando && (
              <p className="flex flex-row justify-center mt-3">Enviando...</p>
            )}
            {noEnviado && !mostrarBoton && (
              <p className="flex flex-row justify-center mt-3">
                No enviado. Inténtalo de nuevo.{" "}
                <XCircleIcon className="h-5 w-5 text-red-500" />
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contacto;
