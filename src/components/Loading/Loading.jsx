// Logo en SVG
import "./index.css";
import Logo from "./Logo";

const LogoSVG = ({ className }) => (
  <div dangerouslySetInnerHTML={{ __html: Logo }} className={className} />
);

// Componente con animación

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen fixed bg-fondoBlanco z-50">
      <span className="relative flex h-36 w-36">
        <span className="animate-ping-2 absolute h-full w-full rounded-full bg-fondoMarron opacity-75"></span>
        <span className="relative flex items-center justify-center rounded-full h-36 w-36 bg-fondoMarron">
          <LogoSVG className="w-32 h-32" />
        </span>
      </span>
    </div>
  );
};

export default Loading;
