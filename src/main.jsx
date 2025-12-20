import { StoreProvider } from "easy-peasy";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
