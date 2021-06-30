import React from "react";
import { LoadingBar, LoadingBarWrapper } from "./styles";

const Loader = () => {
  return (
    <LoadingBarWrapper>
      <LoadingBar>
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoadingBar>
    </LoadingBarWrapper>
  );
};

export default Loader;
