const RequestConfig = {
    url: "",
    method: "get", // default
    baseURL: "",
    data: {},
    transformRequest: [
      function transformRequest(data) {
        // Do whatever you want to transform the data
        return data;
      },
    ],
    transformResponse: [
      function transformResponse(data) {
        // Do whatever you want to transform the data
        return data;
      },
    ],
    headers: {},
    params: {},
    timeout: 330000,
    withCredentials: false, // default
    responseType: "json", // default
    maxContentLength: 50000,
    validateStatus(status) {
      return status >= 200 && status < 300; // default
    },
    maxRedirects: 5, // default
  };
  
  export default RequestConfig;