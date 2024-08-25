import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import {OtherAnimatedSection, AnimatedSection} from "@components/AnimatedSections/AnimatedSections";

const data = {
  seccionId: "quienes-somos",
  titulo: "Quiénes somos",
  subtitulo: "DESDE 1990",
  tituloHistoria: 'Historia de Panadería "For Elise"',
  parrafos: [
    "En 1990, Peto y Elisa, un matrimonio apasionado por la panadería, fundaron su negocio en un barrio de La Plata. Con recetas caseras y dedicación inquebrantable, establecieron una pequeña panadería que se convirtió en un pilar de la comunidad local, conocida por su pan fresco y productos de panadería.",
    'Durante casi 30 años, construyeron una sólida reputación basada en la calidad y el servicio excepcional, convirtiendo su panadería en un lugar de encuentro para vecinos y amigos. En 2018, su hijo, inspirado por el legado de sus padres y en honor a su madre Elisa, inauguró "For Elise", la primera sucursal fuera del barrio original.',
    'Hoy, "For Elise" cuenta con tres puntos de venta, manteniendo la esencia original y enfocándose en profesionalizar sus operaciones para ofrecer la mejor experiencia posible a sus clientes. La familia sigue trabajando con pasión y dedicación para preservar el legado y adaptarse a las demandas del mercado moderno.',
  ],
  cita: '"For Elise" continúa creciendo, innovando y manteniendo el calor humano que ha definido su panadería a lo largo de las décadas.',
};

const Historia = () => {
  return (
    <section className="bg-fondoBeige py-10 px-4 lg:px-60" id={data.seccionId}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start">
        <OtherAnimatedSection>
          <h2 className="text-5xl font-extrabold mb-6 sm:mb-0 sm:mr-8 texto sm:self-stretch text-stroke-1-fondoMarron sm:text-stroke-1-letraClarita">
            {data.titulo}
          </h2>
        </OtherAnimatedSection>
        <div className="flex-1">
          <AnimatedSection delay={0.2}>
            <div className="mb-6">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-stroke-1-letraClarita mb-2">
                {data.subtitulo}
              </h3>
              <h4 className="text-3xl font-semibold text-letraMarron">
                {data.tituloHistoria}
              </h4>
            </div>
          </AnimatedSection>
          <div className="sm:columns-2 gap-8 text-base text-letraMarron">
            <AnimatedSection>
              {data.parrafos.map((parrafo, index) => (
                <p key={index} className="mb-4">
                  {parrafo}
                </p>
              ))}
            </AnimatedSection>
            <AnimatedSection>
              <p className="font-extrabold italic mt-4">{data.cita}</p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
