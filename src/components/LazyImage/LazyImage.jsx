import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "./redux/loadingSlice";
const LazyImage = ({ src, alt, className, onLoad }) => {
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(startLoading({ src, alt }));
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      dispatch(stopLoading({ src, alt }));
      if (onLoad) onLoad();
    };
    return () => {
      dispatch(stopLoading({ src, alt }));
    };
  }, [src]);

  return (
    <div>
      {!loaded && <p>Cargando..</p>}{" "}
      {/* Muestra el componente de carga mientras la imagen se carga */}
      {loaded && <img src={src} alt={alt} className={className} />}
    </div>
  );
};
export default LazyImage;
