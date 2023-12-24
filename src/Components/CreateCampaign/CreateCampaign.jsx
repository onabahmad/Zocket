import React, { useState } from "react";
import "./CreateCampaign.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { campaignOptions } from "../../Data/campaignOptions";

const CreateCampaign = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const Navigate = useNavigate();

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNavigate = () => {
    if (selectedOption !== null) {
      const selectedPlatform = campaignOptions[selectedOption].platform;
      Navigate(`/ChooseProduct?selectedPlatform=${selectedPlatform}`);
    } else {
      // Handle the case where no option is selected
      alert("Please Select a Campaign");
      console.error("No campaign option selected");
    }
  };
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
            <progress value="75" max="100"></progress>
            <div className="rest_stages">
              <RiDeleteBin5Fill />
            </div>
            <progress value="0" max="100"></progress>
            <div className="rest_stages">
              <SlCalender />
            </div>
            <progress value="0" max="100"></progress>
            <div className="rest_stages">
              <IoCheckmarkDoneCircleSharp />
            </div>
          </div>
          <div>
            <p className="lable_para">What you want to do </p>
          </div>

          <div className="chooseCampagine_main_container">
            <div className="chooseCampagine_main_container_heading">
              <p>
                What you want to do
                <span className="steps_campaign">(Step 1 of 4)</span>
              </p>
            </div>
            <div className="chooseCampagine_main_container_options_container">
              {campaignOptions.map((option, index) => (
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
                    {React.createElement(option.icon)}
                  </div>
                  <div>
                    <h3>{option.title}</h3>
                    <p>{option.description}</p>
                    <p>{option.platform}</p>
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

export default CreateCampaign;
