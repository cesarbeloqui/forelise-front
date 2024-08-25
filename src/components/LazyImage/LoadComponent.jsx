import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const LoadComponent = ({ children, loading, setIsLoading }) => {
  const loadingCount = useSelector((state) => state.loading.loadingCount);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (loadingCount > 0) {
      setIsVisible(true);
    } else {
      const timeoutId = setTimeout(() => setIsVisible(false), 1000); // La duración debe coincidir con la transición CSS
      return () => clearTimeout(timeoutId);
    }
  }, [loadingCount]);

  return (
    <>
      {isVisible && (
        <div
          className={`fade-${
            loadingCount > 0
              ? "enter fade-enter-active"
              : "exit fade-exit-active"
          }`}
        >
          {loading}
        </div>
      )}
    </>
  );
};

export default LoadComponent;
