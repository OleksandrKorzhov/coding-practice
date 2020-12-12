class CommonUserError extends Error {
  constructor(error) {
    super();

    this.status = error.status;
    this.message = error.message;
    Error.captureStackTrace(this);
  }
}

module.exports = {
  CommonUserError,
};
