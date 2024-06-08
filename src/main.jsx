import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RootProvider from './store/RootProvider'; // Adjust the path as necessary

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RootProvider>
     <App />
     </ RootProvider>
  </React.StrictMode>
);
