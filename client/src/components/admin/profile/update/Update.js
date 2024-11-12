import React, { useEffect } from "react";
import Body from "./Body";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import { useDispatch } from "react-redux";
import { getAllDepartment } from "../../../../redux/actions/adminActions";
import * as classes from "../../../../utils/styles"; 
const Update = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch]);
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className={classes.rootPage}>
        <Header />
        <div className={classes.barAndBody}>
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Update;
