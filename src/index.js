
import { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DeviceStore from "./components/store/DeviceStore";
import "./index.css";

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    device: new DeviceStore(),
  }}>
    <App />

  </Context.Provider>,
  document.getElementById("root")
);
