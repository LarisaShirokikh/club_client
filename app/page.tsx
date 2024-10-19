import React from "react";
import AboutClub from "./components/AboutClub";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <MainBanner />
        <AboutClub/>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
