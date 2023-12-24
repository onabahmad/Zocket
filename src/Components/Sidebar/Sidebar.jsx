import React, { useState } from "react";
import "./Sidebar.css";
import homeIconImg from "../../assets/icons/Frame 1.png";
import campaignIconImg from "../../assets/icons/Frame 2.png";
import productIconImg from "../../assets/icons/Frame 4.png";
import customerIconImg from "../../assets/icons/Frame 3.png";
import companyLogoImg from "../../assets/icons/logo.png";
import selectedHomeIconImg from "../../assets/icons/Frame 6.png";
import selectedCampaignIconImg from "../../assets/icons/Frame 7.png";
import selectedProductIconImg from "../../assets/icons/Frame 9.png";
import selectedCustomerIconImg from "../../assets/icons/Frame 9.png";

const CustomSidebar = () => {
  const [activeItem, setActiveItem] = useState("campaign");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const getCustomIcon = (item) => {
    switch (item) {
      case "home":
        return activeItem === "home" ? selectedHomeIconImg : homeIconImg;
      case "campaign":
        return activeItem === "campaign"
          ? selectedCampaignIconImg
          : campaignIconImg;
      case "product":
        return activeItem === "product"
          ? selectedProductIconImg
          : productIconImg;
      case "customers":
        return activeItem === "customers"
          ? selectedCustomerIconImg
          : customerIconImg;
      default:
        return campaignIconImg;
    }
  };

  return (
    <div className="Sidebar">
      <div className="sidebarLogoSection">
        <img className="companyLogo" src={companyLogoImg} alt="" />
      </div>
      <div>
        <ul className="sidebarList">
          <li
            className={`sidebarItem ${activeItem === "home" ? "active" : ""}`}
            onClick={() => handleItemClick("home")}
          >
            <img src={getCustomIcon("home")} alt="" />
            <br />
            Home
          </li>
          <li
            className={`sidebarItem ${
              activeItem === "campaign" ? "active" : ""
            }`}
            onClick={() => handleItemClick("campaign")}
          >
            <img src={getCustomIcon("campaign")} alt="" />
            <br />
            Campaign
          </li>
          <li
            className={`sidebarItem ${
              activeItem === "product" ? "active" : ""
            }`}
            onClick={() => handleItemClick("product")}
          >
            <img src={getCustomIcon("product")} alt="" />
            <br />
            Product
          </li>
          <li
            className={`sidebarItem ${
              activeItem === "customers" ? "active" : ""
            }`}
            onClick={() => handleItemClick("customers")}
          >
            <img src={getCustomIcon("customers")} alt="" />
            <br />
            Customers
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomSidebar;
