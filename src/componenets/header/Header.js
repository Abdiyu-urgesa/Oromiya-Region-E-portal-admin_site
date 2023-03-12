import React from "react";
import { Typography, Box } from "@mui/material";
import "./Header.css";
const Header = ({ title, subtitle }) => {
  return (
    <Box mb="10px">
      <h2 className="header_title">{title}</h2>
      <h5 className="header_discription">{subtitle}</h5>
    </Box>
  );
};

export default Header;
