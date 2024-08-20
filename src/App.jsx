import Footer from "./sections/Footer/Footer";
import Navbar from "./sections/Navabar/Navbar";
import Carrusel from "./sections/Carrusel/Carrusel";
import NuestraEmpresa from "./sections/NuestraEmpresa/NuestraEmpresa";
import Sabores from "./sections/Sabores/Sabores";
import Historia from "./sections/Historia/Historia";
import Productos from "./sections/Productos/Productos";
import Sucursales from "./sections/Sucursales/Sucursales";
import Mapa from "./sections/Mapa/Mapa";
import QueresSerParte from "./sections/QueresSerParte/QueresSerParte";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Carrusel />
      <NuestraEmpresa />
      <Sabores />
      <Historia />
      <Productos />
      <Sucursales />
      <Mapa />
      <QueresSerParte />
      
      <Footer />
    </div>
  );
}

export default App;
