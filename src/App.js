import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCampaign from "./Components/CreateCampaign/CreateCampaign";
import ChooseProduct from "./Components/ChooseProduct/ChooseProduct";
import CampaignSetting from "./Components/CampaignSettings/CampaignSetting";
import CampaignPreview from "./Components/CampaignPreview/CampaignPreview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route path="/CreateCampaign" element={<CreateCampaign />} />
        <Route path="/ChooseProduct" element={<ChooseProduct />} />
        <Route path="/Champaginsettings" element={<CampaignSetting />} />
        <Route path="/CampaignPreview" element={<CampaignPreview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
