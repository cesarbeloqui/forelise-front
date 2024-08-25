import LoadComponent from "./LoadComponent";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css"

const ImageProvider = ({ children, loading }) => {
    
  return (
    <Provider store={store}>
      <LoadComponent loading={loading}></LoadComponent>
      {children}
    </Provider>
  );
};
export default ImageProvider;
