const setResponse = (req, responseData) => (req.responseData = responseData);

const getResponse = (req) => req.responseData;

module.exports = {
  setResponse,
  getResponse,
};
