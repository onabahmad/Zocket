import React, { useState } from "react";
import "./CampaignSettings.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CampaignSetting = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState(5000);
  const [selectedTab, setSelectedTab] = useState("location");
  const [radius, setRadius] = useState(0);
  const [location, setLocation] = useState("");

  const Navigate = useNavigate();

  const handleDateChange = (event, dateType) => {
    const newDate = event.target.value;
    if (dateType === "start") {
      setStartDate(newDate);
    } else if (dateType === "end") {
      setEndDate(newDate);
    }
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  console.log(location);
  const handleBudgetChange = (event) => {
    setBudget(parseInt(event.target.value, 10));
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleRadiusChange = (event) => {
    setRadius(parseInt(event.target.value, 10));
  };
  console.log(budget);
  const handleNavigate = () => {
    if (startDate && endDate && budget !== null && location) {
      // Get the existing URL parameters
      const existingSearchParams = new URLSearchParams(window.location.search);

      // Set or update the new parameters
      existingSearchParams.set("startDate", startDate);
      existingSearchParams.set("endDate", endDate);
      existingSearchParams.set("budget", budget.toString());
      existingSearchParams.set("location", location);

      // Construct the new query string
      const newQueryString = existingSearchParams.toString();

      // Navigate to the /CampaignPreview route with the combined parameters
      Navigate(`/CampaignPreview?${newQueryString}`);
    } else {
      alert("Please fill in all required information");
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
            <progress value="25" max="100"></progress>
            <div className="rest_stages">
              <IoCheckmarkDoneCircleSharp />
            </div>
          </div>

          <div className="chooseCampagine_main_container">
            <div className="chooseCampagine_main_container_heading">
              <p>
                Campaign Settings
                <span className="steps_campaign">(Step 3 of 4)</span>
              </p>
            </div>
            <div>
              <p className="span_location_details">Budget and dates info</p>
              <div className="endDate_startDate_container">
                {" "}
                <div className="endDate_startDate_inputfield_container">
                  {/* Input field for Start Date */}
                  <label className="label_button">Start Date</label>
                  <div>
                    <input
                      className="endDate_startDate_inputfield"
                      type="date"
                      value={startDate}
                      onChange={(e) => handleDateChange(e, "start")}
                    />
                  </div>
                </div>
                <div className="endDate_startDate_inputfield_container">
                  {/* Input field for End Date */}
                  <label className="label_button">End Date</label>
                  <div>
                    <input
                      className="endDate_startDate_inputfield"
                      type="date"
                      value={endDate}
                      onChange={(e) => handleDateChange(e, "end")}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="label_button">Enter campaign budget</label>
                <br />
                <div className="campaign_budget_conatiner">
                  {/* Budget Slider */}

                  <input
                    className="radius_input"
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={budget}
                    onChange={handleBudgetChange}
                  />
                  <span className="label_button">Rs {budget}</span>
                </div>
              </div>
            </div>

            <div className="locationRadius_button_container">
              <p className="span_location_details">Location info</p>
              {/* Location / Radius Toggle Button */}
              <div>
                <p className="label_location_type">Location Type</p>
                <div>
                  <button
                    className={
                      selectedTab === "location"
                        ? "active_selected"
                        : "inactive_notselected"
                    }
                    onClick={() => handleTabChange("location")}
                  >
                    Location
                  </button>
                  <button
                    className={
                      selectedTab === "radius"
                        ? "active_selected"
                        : "inactive_notselected"
                    }
                    onClick={() => handleTabChange("radius")}
                  >
                    Radius
                  </button>
                </div>
                {/* Location or Radius Content based on the selected tab */}
                {selectedTab === "location" && (
                  <div>
                    {/* Input field for Location */}
                    <label className="label_button">Select Location</label>
                    <input
                      className="location_input"
                      type="text"
                      placeholder="Enter location"
                      value={location}
                      onChange={handleLocation}
                    />
                  </div>
                )}
                {selectedTab === "radius" && (
                  <div>
                    {/* Radius Slider */}
                    <label className="label_button">
                      Selected target radius
                    </label>
                    <input
                      className="radius_input"
                      type="range"
                      min="0"
                      max="30"
                      step="1"
                      value={radius}
                      onChange={handleRadiusChange}
                    />
                    <span className="label_button">{radius} miles</span>
                  </div>
                )}
              </div>
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
export default CampaignSetting;
