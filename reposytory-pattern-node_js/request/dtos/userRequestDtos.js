const getRequestBody = ({ body }) => body;

const getUserListRequestDto = (request) => {
  const { count, page } = getRequestBody(request);

  return {
    count,
    page,
  };
};

const getUserRequestDto = (request) => {
  const { userId } = getRequestBody(request);

  return {
    id: userId,
  }
};

const createUserRequestDto = (request) => {
  const { name, lastName } = getRequestBody(request);

  return {
    firstName: name,
    lastName,
  };
};

module.exports = {
  getUserListRequestDto,
  getUserRequestDto,
  createUserRequestDto,
};
