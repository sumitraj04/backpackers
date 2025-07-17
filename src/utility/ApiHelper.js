import axios from "axios";
import RequestConfig from "../config/RequestConfig";

async function getRequestConfig(apiConfig) {
  let config = Object.assign({}, RequestConfig);
  if (apiConfig) {
    config = Object.assign({}, RequestConfig, apiConfig);
  }
  return config;
}

export const get = async (url, params, apiConfig) => {
  const config = await getRequestConfig(apiConfig);
  config.params = params;
  const request = await axios.get(url, config);
  const requestParsed = JSON.parse(request.data);
  return requestParsed;
};

export const post = async (url, data, apiConfig) => {
  const config = await getRequestConfig(apiConfig);
  let postData = {};
  if (
    apiConfig &&
    apiConfig.headers &&
    apiConfig.headers["Content-Type"] &&
    apiConfig.headers["Content-Type"] !== "application/json"
  ) {
    postData = data;
    axios.defaults.headers.post["Content-Type"] =
      apiConfig.headers["Content-Type"];
  } else {
    postData = JSON.stringify(data);
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }
  const request = axios.post(url, postData, config);
  return request;
};

export const put = async (url, data, config) => {
  const request = axios.put(url, data, config);
  return request;
};

export const patch = async (url, data) => {
  const config = await getRequestConfig();
  config.headers["Content-Type"] = "application/json";
  const request = axios.patch(url, JSON.stringify(data), config);
  return request;
};

export const deleteResource = async (url) => {
  const config = await getRequestConfig();
  const request = axios.delete(url, config);
  return request;
};
