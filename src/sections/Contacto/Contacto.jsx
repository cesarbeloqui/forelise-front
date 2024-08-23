const Contacto = () => {
  return (
    <section
      id="contacto"
      className="bg-fondoBeige min-h-screen flex items-center justify-center"
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
        <form className="space-y-4">
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
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-naranjaBotonYSubProductos hover:bg-naranjaNav focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-naranjaBotonYSubProductos"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contacto;
