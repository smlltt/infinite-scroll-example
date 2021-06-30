import React from "react";
import { HeaderWrapper } from "./styles";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <HeaderWrapper>
      <Typography variant={"h6"}>
        Infinite Scroll with react-infinite-scroll-component
      </Typography>
    </HeaderWrapper>
  );
};

export default Header;
