import { useState, useRef, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef(null);
  const formContainerRef = useRef(null);
  const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [noEnviado, setNoEnviado] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  if (formContainerRef.current) {
    observer.observe(formContainerRef.current);
  }

  return () => {
    if (formContainerRef.current) {
      observer.unobserve(formContainerRef.current);
    }
  };
}, []);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (value.length < 5 || value.length > 20) {
          error = "El nombre debe tener entre 5 y 20 caracteres";
        }
        break;
      case "phone":
        if (!/^\d{7,20}$/.test(value)) {
          error = "El teléfono debe tener entre 7 y 20 dígitos";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Ingrese un email válido";
        }
        break;
      case "reason":
        if (value.length < 5 || value.length > 20) {
          error = "El motivo debe tener entre 5 y 20 caracteres";
        }
        break;
      case "message":
        if (value.length < 50 || value.length > 500) {
          error = "El mensaje debe tener entre 50 y 500 caracteres";
        }
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setEnviado(false);
    setNoEnviado(false);
    setMostrarBoton(false);

    // Validar todos los campos antes de enviar
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key]);
      return { ...acc, [key]: error };
    }, {});

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      setEnviando(false);
      setMostrarBoton(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    try {
      const response = await emailjs.sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      );
      console.log("SUCCESS!", response.status, response.text);
      setEnviado(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        reason: "",
        message: "",
      });
    } catch (error) {
      console.log("FAILED...", error);
      setNoEnviado(true);
    } finally {
      setEnviando(false);
      setMostrarBoton(true);
      setTimeout(() => {
        setEnviado(false);
        setNoEnviado(false);
      }, 5000);
    }
  };

  const inputClasses =
    "w-full px-3 py-2 border border-placeholderColor rounded-none shadow-sm focus:outline-none focus:ring-naranjaNav focus:border-naranjaNav ring-naranjaNav placeholder:text-placeholderColor placeholder:focus:text-placeholderColorFocus transition-all duration-300 ease-in-out transform focus:scale-[1.02]";

  return (
    <section id="contacto" className="bg-fondoBeige flex">
      <div
        ref={formContainerRef}
        className={`max-w-4xl mx-auto my-10 p-6 bg-fondoBeige transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isShaking ? "animate-shake" : ""}`}
      >
        <h2 className="text-3xl font-medium text-letraMarron mb-4">Contacto</h2>
        <p className="mb-6 text-left text-sm text-letraMarron">
          Escribinos a{" "}
          <a
            href="mailto:info@confiteriaforelise.com"
            className="text-naranjaNav inline-flex italic transition-transform duration-500 hover:scale-105 px-1"
          >
            info@confiteriaforelise.com
          </a>{" "}
          o completá el formulario:
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid md:grid-cols-2 gap-4"
          noValidate
        >
          <div className="md:col-span-1">
            <label htmlFor="name" className="sr-only">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${inputClasses} ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Nombre y Apellido"
              required
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>
          <div className="md:col-span-1">
            <label htmlFor="phone" className="sr-only">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`${inputClasses} ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="Teléfono"
              required
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby="phone-error"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-red-500">
                {errors.phone}
              </p>
            )}
          </div>
          <div className="md:col-span-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputClasses} ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Email"
              required
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>
          <div className="md:col-span-1">
            <label htmlFor="reason" className="sr-only">
              Motivo
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={`${inputClasses} ${
                errors.reason ? "border-red-500" : ""
              }`}
              placeholder="Motivo"
              required
              aria-invalid={errors.reason ? "true" : "false"}
              aria-describedby="reason-error"
            />
            {errors.reason && (
              <p id="reason-error" className="mt-1 text-xs text-red-500">
                {errors.reason}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="sr-only">
              Mensaje, consulta o sugerencia
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`${inputClasses} h-32 resize-none ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Mensaje, consulta o sugerencia"
              required
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
            ></textarea>
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-500">
                {errors.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            {mostrarBoton && (
              <button
                type="submit"
                disabled={enviado || enviando}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-naranjaBotonYSubProductos hover:bg-naranjaNav focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-naranjaBotonYSubProductos transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-live="polite"
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
              </button>
            )}
            {enviado && (
              <p
                className="flex flex-row justify-center mt-3 animate-success text-green-500"
                role="status"
              >
                Enviado{" "}
                <CheckCircleIcon
                  className="h-5 w-5 text-green-500 ml-2"
                  aria-hidden="true"
                />
              </p>
            )}
            {noEnviado && !mostrarBoton && (
              <p
                className="flex flex-row justify-center mt-3 text-red-500"
                role="alert"
              >
                No enviado. Inténtalo de nuevo.{" "}
                <XCircleIcon
                  className="h-5 w-5 text-red-500 ml-2"
                  aria-hidden="true"
                />
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
