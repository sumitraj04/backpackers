import * as API from "../utility/ApiHelper"
const API_ENDPOINT = "https://catfact.ninja/fact";
export const fetchCatApiResults = () => {
  console.log("api called")
    
    return API.get(API_ENDPOINT);
  };