const getListingParamsFromPage = ({ page, count }) => ({
  offset: (page - 1) * count,
  limit: count,
});

module.exports = {
  getListingParamsFromPage,
};
