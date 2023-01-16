import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Popular from "../components/Sections/Popular";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Home() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Popular />
      <Contact />
      <Footer />
    </>
  );
}


