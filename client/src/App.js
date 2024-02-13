import React, { useContext } from "react";
import Header from "./components/Reusables/Header";
import ExploreBooks from "./components/Pages/ExploreBooks";
import LandingRoute from "./components/Pages/LandingRoute";
import Footer from "./components/Reusables/Footer";
import AuthContext from "./components/store/AuthContext";
import "./index.css";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <Header />
      {ctx.isLoggedIn ? <ExploreBooks /> : <LandingRoute />}
      <Footer />
    </div>
  );
}

export default App;
