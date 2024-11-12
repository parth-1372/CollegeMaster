import React from "react";
import Body from "./Body";

import Header from "../../../Header";
import * as classes from "../../../../../utils/styles"; 
const FirstTimePassword = () => {
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className={classes.rootPage}>
        <Header />
        <div className="flex flex-[0.95] w-full">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default FirstTimePassword;
