import { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./index.css";
import logoNav from "../../assets/logoNav.svg";
const classNames = (...classes) => classes.filter(Boolean).join(" ");

const navigationItems = [
  { name: "Inicio", href: "#", current: false },
  { name: "Nuestra Empresa", href: "#nuestra-empresa", current: false },
  { name: "Quiénes somos", href: "#quienes-somos", current: false },
  { name: "Productos", href: "#productos", current: false },
  {
    name: "Sucursales",
    href: "#sucursales",
    current: false,
  },
  {
    name: "Contacto",
    href: "#contacto",
    current: false,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Agregar event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar event listener en desmontaje
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderNavItem = (item) => (
    <a
      key={item.name}
      href={item.href}
      className={classNames("inline-flex items-center px-1 pt-1 text-sm")}
      aria-current={item.current ? "page" : undefined}
    >
      <p
        className={classNames(
          "text-letraBlanca border-b-2 border-transparent pr-3 font-semibold hover:border-naranjaNav transition",
          item.current ? "border-naranjaNav border-b-2" : ""
        )}
      >
        {item.name}
      </p>
    </a>
  );

  const renderMobileNavItem = (item) => (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        "",
        item.current
          ? "border-naranjaNav border-l-2 text-naranjaNav"
          : "border-transparent hover:border-l-2 hover:border-naranjaNav hover:text-naranjaNav",
        "block border-transparent py-2 pl-3 pr-4 text-letraBlanca font-semibold transition"
      )}
      aria-current={item.current ? "page" : undefined}
      onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
    >
      {item.name}
    </a>
  );

  return (
    <nav className="bg-fondoMarron sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex justify-between nav">
          <div className="flex w-full justify-between">
            <div className="flex sm:pl-20 flex-shrink-0 items-center">
              <a href="/#">
                <img
                  className="block h-auto lg:hidden logoNav"
                  src={logoNav}
                  alt="ForElise"
                />
                <img
                  className="hidden h-auto lg:block logoNav"
                  src={logoNav}
                  alt="ForElise"
                />
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigationItems.map(renderNavItem)}
            </div>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition inline-flex items-center justify-center rounded-md p-2 ${
                isOpen ? "text-naranjaNav" : "text-letraBlanca"
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-naranjaNav`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        ref={menuRef} // Asigna el ref al contenedor del menú
        className={`md:hidden ${
          isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="space-y-1 pt-2 pb-3">
          {navigationItems.map(renderMobileNavItem)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
