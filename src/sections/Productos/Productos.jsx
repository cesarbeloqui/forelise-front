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
    <section id="productos" className="bg-fondoBeige py-8 px-28">
      <h2 className="text-3xl font-medium mb-6 text-left ml-4 pr-24 text-letraMarron   border-naranjaBotonYSubProductos border-double inline-block border-b-4">
        Productos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {products.map((product) => (
          <div key={product.title} className="bg-white shadow-lg">
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

        <div className="flex justify-center mt-8 col-span-1 sm:col-span-2 sm:col-start-1 lg:col-span-2 lg:col-start-2">
          <button className="bg-[#F58D3F] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#e07c33] w-full">
            Ver precios
          </button>
        </div>
      </div>
    </section>
  );
};
export default Productos;
