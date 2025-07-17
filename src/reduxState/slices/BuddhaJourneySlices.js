import { createSlice } from "@reduxjs/toolkit";

export const intialStateData = {
  catFact: {
    catFactValue: "",
    loading: false,
  },
  blogList:{
    blogListValue:{},
    loading:false
  }
};
export const BuddhaJourneySlice = createSlice({
  name: "backpacker",
  initialState: intialStateData,
  reducers: {
    getCatAction: (state, action) => {
      console.log("payload", action);
      state.catFact = {
        ...state.catFact,
        loading: true,
      };
    },
    successCatAction: (state, action) => {
      console.log("success action payload", action.payload.fact);

      state.catFact = {
        ...state.catFact,
        catFactValue: action.payload.fact,
        loading: false,
      };
    },
    getBlogListAction: (state, action) => {
      console.log("bloglist acxtion called", action);
      state.blogList = {
        ...state.blogList,
        loading: true,
      };
    },
    successBlogListAction: (state, action) => {
      console.log("bloglist result action", action);
      console.log("bloglist result state", state);

      state.blogList = {
        ...state.blogList,
        blogListValue: action.payload,
        loading: false,
      };
    },
  },
});

export const { getCatAction, successCatAction,getBlogListAction,successBlogListAction } = BuddhaJourneySlice.actions;
