// tableData.js
import { IoLogoFacebook } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import editIcon from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/delete.png";
const tableData = [
  {
    campaign: "Blueberry cake Campaign",
    dateRange: "25 Jul 2020 - 01 Aug 2020",
    clicks: 300,
    budget: "INR 3,400",
    location: "Chennai",
    date: "14 july",
    platform: "Facebook",
    platformIcon: <IoLogoFacebook className="Facebook_icons" />,
    status: "Live now",
    actionIcons: {
      edit: editIcon,
      delete: deleteIcon,
    },
  },

  {
    campaign: "Chocolate cake Campaign",
    dateRange: "25 Jul 2020 - 01 Aug 2020",
    clicks: 210,
    budget: "INR 3,400",
    location: "Combatore",
    date: "20 Jan",
    platform: "Facebook",
    platformIcon: <IoLogoFacebook className="Facebook_icons" />,
    status: "Paused",
    actionIcons: {
      edit: editIcon,
      delete: deleteIcon,
    },
  },

  {
    campaign: "Browine cake Campaign",
    dateRange: "25 Jul 2020 - 01 Aug 2020",
    clicks: 123,
    budget: "INR 3,400",
    location: "Erode",
    date: "12 Jun",
    platform: "Facebook",
    platformIcon: <IoLogoFacebook className="Facebook_icons" />,
    status: "Exhausted",
    actionIcons: {
      edit: editIcon,
      delete: deleteIcon,
    },
  },

  {
    campaign: "Pumpkin cake Campaign",
    dateRange: "25 Jul 2020 - 01 Aug 2020",
    clicks: 435,
    budget: "INR 3,400",
    location: "Combatore",
    date: "23 feb",
    platform: "Youtube",
    platformIcon: <BsYoutube className="Youtube_icons" />,
    status: "Live now",
    actionIcons: {
      edit: editIcon,
      delete: deleteIcon,
    },
  },

  {
    campaign: "Cup-cakes Campaign",
    dateRange: "25 Jul 2020 - 01 Aug 2020",
    clicks: 126,
    budget: "INR 3,400",
    location: "Combatore",
    date: "10 Jul",
    platform: "Google",
    platformIcon: <FcGoogle className="Google_icons" />,
    status: "Live now",
    actionIcons: {
      edit: editIcon,
      delete: deleteIcon,
    },
  },
  // Add more data as needed
];

export default tableData;
