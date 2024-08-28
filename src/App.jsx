import Footer from "./sections/Footer/Footer";
import Navbar from "./sections/Navbar/Navbar";
import Carrusel from "./sections/Carrusel/Carrusel";
import NuestraEmpresa from "./sections/NuestraEmpresa/NuestraEmpresa";
import Sabores from "./sections/Sabores/Sabores";
import Historia from "./sections/Historia/Historia";
import Productos from "./sections/Productos/Productos";
import Sucursales from "./sections/Sucursales/Sucursales";
import Mapa from "./sections/Mapa/Mapa";
import QueresSerParte from "./sections/QueresSerParte/QueresSerParte";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import Contacto from "./sections/Contacto/Contacto";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="es" />

      </Helmet>
      <div className="body">
        <Whatsapp />
        <Navbar />
        <Carrusel />
        <NuestraEmpresa />
        <Sabores />
        <Historia />
        <Productos />
        <Sucursales />
        <Mapa />
        <QueresSerParte />
        <Contacto />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
