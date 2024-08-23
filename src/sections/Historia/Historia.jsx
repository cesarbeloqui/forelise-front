import "./index.css";

const Historia = () => {
  return (
    <section className="bg-fondoBeige py-10" id="quienes-somos">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {" "}
        {/* Agrega justify-center e items-center */}
        <div className="flex px-5 justify-left items-center sm:w-auto w-full">
          <h2 className="text-5xl font-extrabold sm:text-stroke-1-letraClarita text-stroke-1-fondoMarron texto">
            Quiénes somos
          </h2>
          {/* Agrega bg-gray-400 y dimensiones para ver el elemento */}
        </div>
        <div className="flex flex-col items-left justify-center sm:w-[68.5%] sm:p-5 py-0 px-5">
          <div className="flex justify-left sm:mb-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stroke-1-letraClarita">
              DESDE 1990
            </h2>
          </div>
          <div className="flex justify-left">
            <h2 className="text-3xl font-semibold text-left mb-5 text-letraMarron">
              Historia de Panadería "For Elise"
            </h2>
          </div>
          <div className="flex sm:flex-row justify-left">
            <div className="sm:w-1/2 flex flex-col">
              <p className="sm:mt-0 mr-2 text-base text-letraMarron hidden sm:flex">
                En 1990, Peto y Elisa, un matrimonio apasionado por la
                panadería, fundaron su negocio en un barrio de La Plata. <br />{" "}
                <br /> Con recetas caseras y dedicación inquebrantable,
                establecieron una pequeña panadería que se convirtió en un pilar
                de la comunidad local, conocida por su pan fresco y productos de
                panadería. <br /> <br />
                Durante casi 30 años, construyeron una sólida reputación basada
                en la calidad y el servicio excepcional, convirtiendo su
                panadería en un lugar de encuentro para vecinos y amigos. En
                2018, su hijo, inspirado por el legado de sus padres y en
              </p>
              <p className="sm:mt-4 text-base text-letraMarron flex flex-col sm:hidden">
                <span>
                  En 1990, Peto y Elisa, un matrimonio apasionado por la
                  panadería, fundaron su negocio en un barrio de La Plata.{" "}
                  <br /> <br /> Con recetas caseras y dedicación inquebrantable,
                  establecieron una pequeña panadería que se convirtió en un
                  pilar de la comunidad local, conocida por su pan fresco y
                  productos de panadería. <br /> <br />
                  Durante casi 30 años, construyeron una sólida reputación
                  basada en la calidad y el servicio excepcional, convirtiendo
                  su panadería en un lugar de encuentro para vecinos y amigos.
                  En 2018, su hijo, inspirado por el legado de sus padres y en
                  honor a su madre Elisa, inauguró "For Elise", la primera
                  sucursal fuera del barrio original. <br />
                  <br />
                  Hoy, "For Elise" cuenta con tres puntos de venta, manteniendo
                  la esencia original y enfocándose en profesionalizar sus
                  operaciones para ofrecer la mejor experiencia posible a sus
                  clientes. La familia sigue trabajando con pasión y dedicación
                  para preservar el legado y adaptarse a las demandas del
                  mercado moderno.
                </span>
                <br />
                <br />
                <span
                  className="font-extrabold 
                italic"
                >
                  "For Elise" continúa creciendo, innovando y manteniendo el
                  calor humano que ha definido su panadería a lo largo de las
                  décadas.
                </span>
              </p>
            </div>
            <div className="sm:w-1/2 mt-6 sm:mt-0 sm:ml-5 hidden sm:flex">
              <p className="text-base text-letraMarron">
                honor a su madre Elisa, inauguró "For Elise", la primera
                sucursal fuera del barrio original. <br />
                <br />
                Hoy, "For Elise" cuenta con tres puntos de venta, manteniendo la
                esencia original y enfocándose en profesionalizar sus
                operaciones para ofrecer la mejor experiencia posible a sus
                clientes. La familia sigue trabajando con pasión y dedicación
                para preservar el legado y adaptarse a las demandas del mercado
                moderno. <br />
                <br />
                <span
                  className="font-extrabold 
                italic"
                >
                  "For Elise" continúa creciendo, innovando y manteniendo el
                  calor humano que ha definido su panadería a lo largo de las
                  décadas.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Historia;
