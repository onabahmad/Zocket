import React, { useState, useEffect } from "react";
import "./MainDash.css";
import Header from "../Header/Header";
import { FiPlusCircle } from "react-icons/fi";
import tableData from "../../Data/tableData";
import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
import { useNavigate, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const calculateDaysDifference = (campaignDate) => {
  const currentDate = new Date();
  const campaignDateObj = new Date(campaignDate);
  const timeDifference = currentDate - campaignDateObj;
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};

const MainDash = () => {
  const [data, setdata] = useState(tableData);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [campaignStates, setCampaignStates] = useState(
    tableData.map(() => true)
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDaysFilter, setSelectedDaysFilter] = useState("All Days");
  const Navigate = useNavigate();
  const location = useLocation();
  const handleDelete = (index) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this campaign?"
    );

    if (isConfirmed) {
      const updatedData = [...data];
      updatedData.splice(index, 1);

      setdata(updatedData);
    }
  };

  const filteredData = data.filter((data) => {
    // Filter by platform
    const platformFilter =
      !selectedPlatform || data.platform === selectedPlatform;

    // Filter by status
    const statusFilter = !selectedStatus || data.status === selectedStatus;
    // // Filter by search
    const searchTermFilter =
      searchTerm === "" ||
      data.campaign.toLowerCase().includes(searchTerm.toLowerCase());

    const daysFilter =
      selectedDaysFilter === "All Days" ||
      calculateDaysDifference(data.date) <= parseInt(selectedDaysFilter, 10);

    // Return true if both filters pass
    return platformFilter && statusFilter && searchTermFilter && daysFilter;
  });

  const toggleCampaignState = (index) => {
    const updatedStates = [...campaignStates];
    updatedStates[index] = !updatedStates[index];
    setCampaignStates(updatedStates);
  };
  console.log("Selected Platform:", selectedPlatform);
  console.log("Filtered Data:", filteredData);
  console.log("table data", tableData);

  const getStatusIndide = (status) => {
    switch (status) {
      case "Live now":
        return "live-now-status";
      case "Paused":
        return "paused-status";
      case "Exhausted":
        return "exhausted-status";
      default:
        return "";
    }
  };
  const handleCreateCampaign = () => {
    Navigate("/CreateCampaign");
  };

  return (
    <div className="MainDash_container">
      <Header />
      <div className="MainDash">
        <div className="mainDash_heading_button">
          <div>
            <h2 className="mainDash_heading">Your Campaings</h2>

            <p className="mainDash_discription">
              Check the list of campigns you created
            </p>
          </div>

          <button onClick={handleCreateCampaign} className="create_campaign">
            <FiPlusCircle />
            Create new campaign
          </button>
        </div>

        <div className="Campaigns_dispaly_container">
          <div className="filter_search_sections">
            <div className="search_bar">
              <CiSearch />
              <input
                placeholder="Search campaign"
                type="text"
                id="searchCampaign"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter_section">
              <label className="filter_labels" htmlFor="platformFilter">
                {" "}
                Platform:
              </label>
              <select
                className="filter-container"
                id="platformFilter"
                onChange={(e) => setSelectedPlatform(e.target.value)}
                value={selectedPlatform || ""}
              >
                <option value="">All Platforms</option>
                <option value="Facebook">Facebook</option>
                <option value="Youtube">YouTube</option>
                <option value="Google">Google</option>
              </select>

              <label className="filter_labels" htmlFor="statusFilter">
                Status:
              </label>
              <select
                className="filter-container"
                id="statusFilter"
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus || ""}
              >
                <option value="">All Status</option>
                <option value="Live now">Live now</option>
                <option value="Paused">Paused</option>
                <option value="Exhausted">Exhausted</option>
              </select>

              <select
                className="filter-container"
                id="daysFilter"
                onChange={(e) => setSelectedDaysFilter(e.target.value)}
                value={selectedDaysFilter}
              >
                <option value="All Days">All Days</option>
                <option value="30">Last 30 days</option>
                <option value="60">Last 60 days</option>
                <option value="20000">Last Year</option>
              </select>
            </div>
          </div>

          {/* Table Section */}
          <table className="campaign_table">
            <thead>
              <tr>
                <th className="onOff">On/Off</th>
                <th>Campaign</th>
                <th>Date Range</th>
                <th>Clicks</th>
                <th>Budget</th>
                <th>Location</th>
                <th className="table_heading_platform">Platform</th>
                <th className="table_heading_status">Status</th>
                <th className="action">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => (
                <tr key={index}>
                  <td className="onOff_buttons">
                    <button
                      className="On_off_button_container"
                      onClick={() => toggleCampaignState(index)}
                    >
                      {campaignStates[index] ? (
                        <LiaToggleOnSolid className="ON_button" />
                      ) : (
                        <LiaToggleOffSolid className="OFF_button" />
                      )}
                    </button>
                  </td>
                  <td className="campaign_name">
                    {data.campaign}
                    <p className="created_date">Created on {data.date}</p>
                  </td>
                  <td className="campaign_dateRange">{data.dateRange}</td>
                  <td className="campaign_clicks">{data.clicks}</td>
                  <td className="campaign_budget">{data.budget}</td>
                  <td className="campaign_location">{data.location}</td>
                  <td className="campaign_platform">{data.platformIcon}</td>
                  <td className="campaign_status">
                    <div className={getStatusIndide(data.status)}>
                      {data.status}
                    </div>
                  </td>
                  <td className="campaign_action">
                    <div className="campaign_action_container">
                      <button className="Edit_button_container">
                        <img
                          className="Edit_button"
                          src={data.actionIcons.edit}
                          alt="Edit"
                        />
                      </button>
                      <button
                        className="Delete_button_container"
                        onClick={() => handleDelete(index)}
                      >
                        <img
                          className="Delete_button_container6"
                          src={data.actionIcons.delete}
                          alt="Delete"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainDash;
