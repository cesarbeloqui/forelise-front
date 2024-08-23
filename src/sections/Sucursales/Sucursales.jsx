const Sucursales = () => {
  const branches = [
    {
      city: "LA PLATA",
      address: "Calle 120 n° 2101 (esq. calle 75)",
      hours: "Todos los días de 7 a 21hs",
      href: "https://maps.app.goo.gl/HKxq68HH27UJf5AD6",
    },
    {
      city: "LA PLATA",
      address: "Diag. 73 n° 1506 (y calle 57)",
      hours: "Todos los días de 7 a 21hs",
      href: "https://maps.app.goo.gl/TYW6jb625z2RBhDC8",
    },
    {
      city: "LA PLATA",
      address: "Boulevard 82 n° 372 (esq. calle 34)",
      hours: "Todos los días de 7 a 21hs",
      href: "https://maps.app.goo.gl/sSv5e3X5wahRBn316",
    },
  ];
  return (
    <section id="sucursales" className="bg-white py-8 sm:px-28 p-4">
      <h2 className="text-3xl font-medium mb-2 text-left ml-4 pr-24 text-letraMarron   border-naranjaBotonYSubProductos border-double inline-block border-b-4">
        Sucursales
      </h2>
      <p className="text-left text-letraMarron ml-4 text-xl mb-6">
        Encontrá tu tienda más cercana
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {branches.map((branch, index) => (
          <a href={branch.href} key={index}>
            <div className="text-left">
              <h3 className="text-naranjaBotonYSubProductos font-semibold text-lg">
                {branch.city}
              </h3>
              <p className="text-base font-bold text-letraMarron">
                {branch.address}
              </p>
              <p className="text-base text-letraMarron">{branch.hours}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Sucursales;
