import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import iconUbic from "../assets/iconUbic.svg";
import iconTel from "../assets/iconWpFooter.svg";
import iconMail from "../assets/iconEmail.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import lin from "../assets/in.svg";

export default {
  nuestraEmpresa: {
    titulo: "Nuestra Empresa",
    columna1:
      "En For Elise, aspiramos a {r}ser tu marca gastronómica favorita{/r}, reconocida por nuestra calidad artesanal y tradición familiar desde 1990. Ofrecemos productos frescos y deliciosos, ideales para tus momentos especiales.",
    columna2:
      "Nuestro equipo profesional, apasionado por la panadería, está dedicado a brindarte la mejor experiencia y apoyar el crecimiento de tu negocio.",
    foot: "Sabores que cuentan historias, momentos que unen familias",
  },
  quieneSomos: {
    lead: "DESDE 1990",
    left: "Quiénes somos",
    titulo: 'Historia de Panadería "For Elise"',
    texto: `
        En 1990, Peto y Elisa, un matrimonio apasionado por la panadería, fundaron su negocio en un barrio de La Plata. Con recetas caseras y dedicación inquebrantable, establecieron una pequeña panadería que se convirtió en un pilar de la comunidad local, conocida por su pan fresco y productos de panadería.

Durante casi 30 años, construyeron una sólida reputación basada en la calidad y el servicio excepcional, convirtiendo su panadería en un lugar de encuentro para vecinos y amigos. En 2018, su hijo, inspirado por el legado de sus padres y en honor a su madre Elisa, inauguró "For Elise", la primera sucursal fuera del barrio original.

Hoy, "For Elise" cuenta con tres puntos de venta, manteniendo la esencia original y enfocándose en profesionalizar sus operaciones para ofrecer la mejor experiencia posible a sus clientes. La familia sigue trabajando con pasión y dedicación para preservar el legado y adaptarse a las demandas del mercado moderno.
"For Elise" continúa creciendo, innovando y manteniendo el calor humano que ha definido su panadería a lo largo de las décadas.
        `,
  },
  productos: {
    titulo: "Productos",
    productos: [
      { titulo: "Confitería", imagen: product1 },
      { titulo: "Panadería", imagen: product2 },
      { titulo: "Salado", imagen: product3 },
      { titulo: "Sin tacc", imagen: product4 },
    ],
    link: "https://docs.google.com/spreadsheets/d/1qSa16uloLnK0pwb4CeeTtM3jOKvw9WmFBc1cKj3OjN4",
  },
  sucursales: {
    titulo: "Sucursales",
    texto: "Encontrá tu tienda más cercana",
    sucursales: [
      {
        titulo: "LA PLATA",
        direccion: "120 esq 75",
        horarios: "Abierto todos los días de 7 a 21 hs.",
      },
      {
        titulo: "LA PLATA",
        direccion: "Diagonal 73 y 57",
        horarios: "Abierto todos los días de 7 a 21 hs.",
      },
      {
        titulo: "LA PLATA",
        direccion: "Boulevard 82 n° 372 (esq. calle 34)",
        horarios: "Abierto todos los días de 7 a 21 hs.",
      },
    ],
  },
  quereSerParte: {
    titulo: "¿Querés ser parte de nuestro equipo?",
    texto:
      "Mandanos tu CV a rrhh@confiteriaforelise.com y estaremos en contacto",
    link: "mailto:rrhh@confiteriaforelise.com",
  },
  formulario: {
    titulo: "Contacto",
    texto:
      "Escribinos a {r}info@confiteriaforelise.com{/r} o completá el formulario:",
  },
  footer: {
    lista1: [
      {
        titulo: "La Plata",
        icon: iconUbic,
        href: "https://maps.app.goo.gl/TjeaQ2Mgr2in8QMW8",
      },
      {
        titulo: "+54 9 11 3560 1328",
        icon: iconTel,
        href: "https://wa.me/5491135601328",
      },
      {
        titulo: "info@confiteriaforelise.com",
        icon: iconMail,
        href: "mailto:info@confiteriaforelise.com",
      },
    ],
    redes: [
      {
        link: "https://www.facebook.com/Foreliseconfiteria",
        icon: fb,
      },
      {
        link: "https://www.instagram.com/foreliseconfiteria/",
        icon: ig,
      },
      {
        link: "https://www.linkedin.com/company/for-elise-confiteria/",
        icon: lin,
      },
      /*         {
          link: "",
          icon: "/icons/icon-wp.svg",
        }, */
    ],
  },
};
