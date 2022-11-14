import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import TopBar from "./common/topbar/TopBar";
import About from "./components/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-application">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>Esta página no exíste.</h2>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
