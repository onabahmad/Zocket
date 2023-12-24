import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { campaignPreview } from "../../Data/campaignPreview";
import "./CampaignPreview.css";
import { useNavigate, useLocation } from "react-router-dom";

const CampaignPreview = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const Navigate = useNavigate();
  const location = useLocation();
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [budget, setBudget] = useState(null);
  const [Location, setLocation] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSelectedPlatform(searchParams.get("selectedPlatform"));
    setSelectedProduct(searchParams.get("selectedProduct"));
    setStartDate(searchParams.get("startDate"));
    setEndDate(searchParams.get("endDate"));
    setBudget(searchParams.get("budget"));
    setLocation(searchParams.get("location"));
  }, [location.search]);
  console.log(
    selectedPlatform,
    selectedProduct,
    startDate,
    endDate,
    budget,
    Location
  );

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNavigate = () => {
    Navigate("/", {
      state: {
        selectedPlatform,
        selectedProduct,
        startDate,
        endDate,
        budget,
        Location,
      },
    });
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
              Launch your ad in just 3 easy steps
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
            <progress value="100" max="100"></progress>
            <div className="active_stage">
              <SlCalender />
            </div>
            <progress value="100" max="100"></progress>
            <div className="active_stage">
              <IoCheckmarkDoneCircleSharp />
            </div>
          </div>

          <div className="chooseCampagine_main_container">
            <div className="chooseCampagine_main_container_heading">
              <p>
                Ready to go
                <span className="steps_campaign">(Step 4 of 4)</span>
              </p>
            </div>
            <div className="chooseCampagine_main_container_options_container campaignPreview_container">
              {campaignPreview.map((option, index) => (
                <div
                  key={index}
                  className={`campagine_options  campaignPreview_options ${
                    selectedOption === index ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(index)}
                >
                  {" "}
                  <div>
                    <div className="profile_titleDiscription_container">
                      <img
                        src={option.profile}
                        alt=""
                        className="Profile_img"
                      />
                      <h3>{option.title}</h3>
                    </div>
                    <p>{option.discription}</p>
                  </div>
                  <div
                    className={`chooseCampagine_main_container_options_container_icons ${
                      selectedOption === index ? "selected-icon" : ""
                    }`}
                  >
                    <img
                      className="product_img"
                      src={option.img}
                      alt="Product Image"
                    />
                  </div>
                  {selectedOption === index && (
                    <div className="tick-mark campaignPreview_tickMark">
                      <IoCheckmarkDoneCircleSharp />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="createCampaign_continue_button">
            <button onClick={handleNavigate}>Start Campaign</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPreview;
