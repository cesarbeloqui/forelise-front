import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";

const Productos = () => {
  const products = [
    {
      title: "Confitería",
      image: product1,
    },
    {
      title: "Panadería",
      image: product2,
    },
    {
      title: "Salado",
      image: product3,
    },
    {
      title: "Sin TACC",
      image: product4,
    },
  ];
  return (
    <section id="productos" className="bg-fondoBeige py-8 sm:px-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-8 text-left ml-4 pr-24 text-letraMarron   border-naranjaBotonYSubProductos border-double inline-block border-b-4">
          Productos
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-2 px-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-fondoBlanco shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium text-center">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-8 col-span-2 sm:col-span-2 sm:col-start-1 lg:col-span-2 lg:col-start-2">
            <a
              href="https://docs.google.com/spreadsheets/d/1qSa16uloLnK0pwb4CeeTtM3jOKvw9WmFBc1cKj3OjN4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-naranjaBotonYSubProductos hover:bg-naranjaNav focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-naranjaBotonYSubProductos transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                Ver precios
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Productos;
