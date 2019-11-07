export const AxiosErrorHandler = (error) => {
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    return error.response;
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`part
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */

    let error = { response: 500 };
    return error;

  } else {
    // Something happened in setting up the request and triggered an Error
    let error = { response: 500 };
    return error;
  }
}