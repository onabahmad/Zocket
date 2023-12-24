import React, { useEffect, useState } from "react";
import "./ChooseProduct.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { productOptions } from "../../Data/productOptions";

const ChooseProduct = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const platform = searchParams.get("selectedPlatform");
    setSelectedPlatform(platform);
  }, [location.search]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNavigate = () => {
    if (selectedOption !== null) {
      const selectedProduct = productOptions[selectedOption].title;
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("selectedProduct", selectedProduct);

      // Update the URL with the selected product
      Navigate(`/Champaginsettings?${queryParams.toString()}`);
    } else {
      alert("Please Select a Product");
      console.error("No product option selected");
    }
  };

  console.log(selectedPlatform);
  return (
    <div className="CreateCampaign_page">
      <Sidebar />
      <div className="header_createCampaign_section">
        <Header />
        <div className="CreateCampaign_section">
          <div>
            <h2 className="mainDash_heading">Your Ad Campaign</h2>
            <p className="mainDash_discription">
              Launch your ad in just 4 easy steps
            </p>
          </div>
          <div className="progress-bar-container">
            <div className="active_stage">
              <PiLightbulbFilamentFill />
              <br />
            </div>
            <progress value="100" max="100"></progress>
            <div className="active_stage">
              <RiDeleteBin5Fill />
            </div>
            <progress value="75" max="100"></progress>
            <div className="rest_stages">
              <SlCalender />
            </div>
            <progress value="0" max="100"></progress>
            <div className="rest_stages">
              <IoCheckmarkDoneCircleSharp />
            </div>
          </div>

          <div className="chooseCampagine_main_container">
            <div className="chooseCampagine_main_container_heading">
              <p>
                Choose product
                <span className="steps_campaign">(Step 2 of 4)</span>
              </p>
            </div>
            <div className="chooseCampagine_main_container_options_container">
              {productOptions.map((option, index) => (
                <div
                  key={index}
                  className={`campagine_options ${
                    selectedOption === index ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(index)}
                >
                  <div
                    className={`chooseCampagine_main_container_options_container_icons ${
                      selectedOption === index ? "selected-icon" : ""
                    }`}
                  >
                    <img
                      className="product_img"
                      src={option.images}
                      alt="Product Image"
                    />
                  </div>
                  <div>
                    <h3>{option.title}</h3>
                    <p>{option.cost}</p>
                    {/* <p>{option.platform}</p> */}
                  </div>
                  {selectedOption === index && (
                    <div className="tick-mark">
                      <IoCheckmarkDoneCircleSharp />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="createCampaign_continue_button">
            <button onClick={handleNavigate}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseProduct;
