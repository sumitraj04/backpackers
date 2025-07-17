import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatAction } from "../../reduxState/slices/BuddhaJourneySlices";

const ReduxSagaTesting = () => {
  const dispatch = useDispatch();
  const stateValue = useSelector((e) => e.buddhaJourneySlice.catFact);
  console.log("redux testing file");
  return (
    <div>
      <h1>
        {stateValue.loading === true
          ? "loading......"
          : stateValue.catFactValue}
      </h1>
      <Button onClick={() => dispatch(getCatAction())}>Test Api</Button>
    </div>
  );
};

export default ReduxSagaTesting;
