module.exports = {
  sendResponse: (res, statusCode, message, data) => {
    res.status(statusCode).json({
      error: statusCode === 200 ? false : true,
      message,
      data,
    });
    res.end();
  },
};
