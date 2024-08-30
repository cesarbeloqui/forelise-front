import logo from "../../assets/logoFooter.svg";
import "./index.css";
import data from "../../data/data";

const Footer = () => {
  const { footer } = data;
  const { lista1, redes } = footer;
  const fechaActual = new Date();

  // Obtener el año
  const añoActual = fechaActual.getFullYear();
  return (
    <div className="footer-container bg-fondoMarron">
      <footer className="footer w-full container-footer bg-fondoMarron sm:h-[11.8rem] h-auto sm:pb-0 pb-5">
        <div></div>
        <div className="logo sm:m-0">
          <a href="/#">
            <img src={logo} alt="" className="w-[5rem] sm:w-[7.85rem]" />
          </a>
        </div>
        <div></div>
        <div className="contacto flex flex-col mt-[4.5vh] ml-[11.5vw] sm:m-0">
          <ul>
            {lista1.map((item, index) => (
              <li
                key={index}
                className="text-left text-sm flex flex-row items-center mb-3"
              >
                <a
                  href={item.href}
                  className="flex flex-row items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.icon}
                    className="w-[1.7rem] sm:w-[1.25rem] mr-4"
                    alt={item.titulo}
                  />
                  <p className="text-letraBlanca sm:text-sm text-[1rem]">
                    {item.titulo}
                  </p>
                </a>
              </li>
            ))}
          </ul>
          <div id="redes" className="flex flex-row mt-[2vh]">
            {redes.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.icon}
                  className="sm:w-[1.25rem] mr-4 w-[1.7rem]"
                  key={index}
                />
              </a>
            ))}
          </div>
        </div>
        <div></div>
      </footer>
      <div className="w-full bg-fondoMarron text-letraClarita text-xs sm:text-sm py-2 px-4 sm:px-20 flex flex-col sm:flex-row justify-between items-center border-t-0 border-letraClarita">
        <div className="mb-2 sm:mb-0">
          {`© ${añoActual} Confitería For Elise Todos los derechos reservados`}
        </div>
{/*         <div className="flex items-center">
          <a href="mailto:info@confiteriaforelise.com" className="mr-2 hover:underline">
            info@confiteriaforelise.com
          </a>
          |
          <a href="https://www.confiteriaforelise.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
            www.confiteriaforelise.com
          </a>
        </div> */}
        <div className="mt-2 sm:mt-0">
          Diseño web: <a href="https://www.reddisegno.com.ar/" target="_blank" rel="noopener noreferrer" className="text-naranjaNav">REDdiseño</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;