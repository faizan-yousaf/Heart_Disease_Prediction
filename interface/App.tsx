import React from "react";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { About } from "./pages/About";
import { Documentation } from "./pages/Documentation";
import { Contact } from "./pages/Contact";
import { Analysis } from "./pages/Analysis";
import { ThemeProvider } from "./context/themeContext";
import { Routes, Route } from "react-router-dom";
export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
