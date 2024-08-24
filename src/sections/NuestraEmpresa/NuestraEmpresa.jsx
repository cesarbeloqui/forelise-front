import {
  AnimatedSection,
  OtherAnimatedSection,
} from "../../components/AnimatedSections/AnimatedSections";
const NuestraEmpresa = () => {
  return (
    <section className="bg-white py-10" id="nuestra-empresa">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-center">
        <div className="sm:w-1/3">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-letraMarron">
              Nuestra Empresa
            </h2>
            <p className="mt-4 text-base text-letraMarron">
              En For Elise, aspiramos a
              <strong> ser tu marca gastronómica favorita</strong>, reconocida
              por nuestra calidad artesanal y tradición familiar desde 1990.
              Ofrecemos productos frescos y deliciosos, ideales para tus
              momentos especiales.
            </p>
          </AnimatedSection>
        </div>

        <div className="sm:w-1/3 mt-6 sm:mt-0 sm:ml-5">
          <AnimatedSection>
            <p className="text-base text-letraMarron">
              Nuestro equipo profesional, apasionado por la panadería, está
              dedicado a brindarte la mejor experiencia.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
export default NuestraEmpresa;
