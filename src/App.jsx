// App.jsx 또는 App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

import { Nav } from "./components/Nav";
import { Bnb } from "./components/Bnb";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ButtonResetScroll } from "./components/ButtonResetScroll";
import { CallRedirect } from "./pages/CallRedirect";
import ScrollToTop from "./hook/ScrollToTop";
import { PrintPage } from "./pages/PrintPage";
import { AnsanPage } from "./pages/AnsanPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <header role="banner" className="mx-auto">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/print" element={<PrintPage />} />
        <Route path="/ansan" element={<AnsanPage />} />
        <Route path="/call" element={<CallRedirect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ButtonResetScroll />
      <footer role="contentinfo">
        <Bnb />
      </footer>
    </BrowserRouter>
  );
}

export default App;
