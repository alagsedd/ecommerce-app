import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Styles/HomePage.css";
import HomePage from "./Pages/HomePage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
