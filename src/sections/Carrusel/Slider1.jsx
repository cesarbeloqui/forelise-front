import PropTypes from "prop-types";

const Slider1 = ({ imagenes, className }) => {
  return (
    <div className={className}>
      {imagenes.map((imagen, index) => (
        <img
          key={index}
          src={imagen}
          alt={`Imagen ${index + 1}`}
          className="w-1/3 h-auto"
        />
      ))}
    </div>
  );
};
// Validación de las props
Slider1.propTypes = {
  imagenes: PropTypes.arrayOf(PropTypes.string).isRequired, // Se espera un array de strings y es requerido
  className: PropTypes.string // Se espera un string para la clase
};
export default Slider1;
