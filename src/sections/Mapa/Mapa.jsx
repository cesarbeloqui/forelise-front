import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import { Icon } from "leaflet";
import iconU from "../../assets/ForEliseUbic.svg";
import { useState, useEffect } from "react";

const icon = new Icon({
  iconUrl: iconU,
  iconSize: [90, 90],
  iconAnchor: [45, 90],
  popupAnchor: [0, -90],
});

const MapComponent = () => {
  const markers = [
    {
      position: [-34.922228, -57.9125],
      href: "https://maps.app.goo.gl/HKxq68HH27UJf5AD6",
      title: "LA PLATA",
      address: "Calle 120 n° 2101 (esq. calle 75)",
      hours: "Todos los días de 7 a 21hs",
      id: "sucursal1",
    },
    {
      position: [-34.9213267, -57.9480234],
      href: "https://maps.app.goo.gl/TYW6jb625z2RBhDC8",
      title: "LA PLATA",
      address: "Diag. 73 n° 1506 (y calle 57)",
      hours: "Todos los días de 7 a 21hs",
      id: "sucursal2",
    },
    {
      position: [-34.92407, -57.990421],
      href: "https://maps.app.goo.gl/sSv5e3X5wahRBn316",
      title: "LA PLATA",
      address: "Boulevard 82 n° 372 (esq. calle 34)",
      hours: "Todos los días de 7 a 21hs",
      id: "sucursal3",
    },
  ];

  const [zoom, setZoom] = useState(window.innerWidth < 768 ? 12 : 13);

  useEffect(() => {
    const handleResize = () => {
      setZoom(window.innerWidth < 768 ? 12 : 13);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="z-50 absolute right-2 bottom-2 sm:right-16 sm:bottom-12">
        <h1 className="text-4xl font-bold text-stroke-1-fondoMarron">
          Puntos de venta
        </h1>
      </div>
      <MapContainer
        center={[-34.9205082, -57.9531703]}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution=""
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />

        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={icon}>
            <Popup>
              <a
                href={marker.href}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="text-left popup" id={marker.id}>
                  <h3 className="text-naranjaBotonYSubProductos font-semibold text-lg">
                    {marker.title}
                  </h3>
                  <p className="text-base font-bold text-letraMarron">
                    {marker.address}
                  </p>
                  <p className="text-base text-letraMarron">{marker.hours}</p>
                  <p className="text-[0.6rem] text-letraMarron">
                    Click Acá para ir a Maps
                  </p>
                </div>
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
