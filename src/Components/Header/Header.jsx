import React from "react";
import "./Header.css";
import { RiVipCrown2Fill } from "react-icons/ri";
import { IoGiftOutline, IoNotificationsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiTranslate } from "react-icons/ri";
import CakeProfile from "../../assets/images/Cake.png";

const Header = () => {
  return (
    <div className="header">
      <p className="trail_period">Free trail ends in 2 days </p>
      <div className="buy_Plan">
        <RiVipCrown2Fill /> Buy Plan
      </div>
      <div className="header_icons">
        <IoGiftOutline />
        <IoNotificationsOutline />
      </div>
      <div className="profile">
        <img className="cakeprofile" src={CakeProfile} alt="" />
        <p className="profile_name">Mukund cake shop</p>
        <IoMdArrowDropdown />
        <span className="translate_icon">
          <RiTranslate />
        </span>
      </div>
    </div>
  );
};

export default Header;
