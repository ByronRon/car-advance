const notFoundHandler = (request, response, next) => {
  const message = "Not Found";

  response.status(404).json({ status: 400, message: message });
};

export default notFoundHandler;
