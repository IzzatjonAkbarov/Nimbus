import React from "react";
import Header from "../../../components/header";

import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer";

const Mainlayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Mainlayout;
