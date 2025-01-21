import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { Header } from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import { BackgroundDecorator } from "./src/components/BackgroundDecorator";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <BackgroundDecorator />
        <Header />
        <div className="flex-grow w-full max-w-7xl mx-auto">{children}</div>
        <Footer />
      </div>
    </Router>
  );
};
