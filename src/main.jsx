import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ImageProvider from "./components/LazyImage/ImageProvider.jsx";
import Loading from "./components/Loading/Loading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageProvider loading={<Loading />}>
      <App />
    </ImageProvider>
  </StrictMode>
);
