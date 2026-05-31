import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Machinery from "./pages/Machinery";
import Milk from "./pages/Milk";
import Fertilizer from "./pages/Fertilizers";
import Tent from "./pages/Tent";
import Landselling from "./Pages/Landselling";
import Weather from "./pages/Weather";
import FarmingCrop from "./pages/FarmingCrop";
import TopDeals from "./pages/TopDeals";
import Account from "./pages/Account";
import Play from "./pages/Play";
import NotFound from "./pages/NotFound";
import BuildingMaterials from "./pages/BuildingMaterials";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/fertilizers" element={<Fertilizer />} />
          <Route path="/tent-booking" element={<Tent />} />
          <Route path="/landselling" element={<Landselling />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/farming-crop" element={<FarmingCrop />} />
          <Route path="/top-deals" element={<TopDeals />} />
          <Route path="/account" element={<Account />} />
          <Route path="/play" element={<Play />} />
          <Route path="/building-materials" element={<BuildingMaterials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;