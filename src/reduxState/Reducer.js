import { combineReducers } from "redux";
import { BuddhaJourneySlice } from "./slices/BuddhaJourneySlices";

export function createRootReducer() {
    return combineReducers({
      buddhaJourneySlice: BuddhaJourneySlice.reducer,
    });
  }
  