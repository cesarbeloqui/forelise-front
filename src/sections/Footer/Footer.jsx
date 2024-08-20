import logo from "../../assets/logoFooter.svg";
import "./index.css";
import data from "../../data/data";

const Footer = () => {
  const { footer } = data;
  const { lista1, redes } = footer;
  console.log(data);
  return (
    <footer className="footer w-full container-footer bg-fondoMarron sm:h-[11.8rem] h-[50vh]">
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
  );
};
export default Footer;
