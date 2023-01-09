// export default (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || "error";
//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message,
//   });
// };

import {
  InvalidTokenError,
  UnauthorizedError,
  InsufficientScopeError,
} from "express-oauth2-jwt-bearer";

const errorHandler = (error, request, response, next) => {
  if (error instanceof InsufficientScopeError) {
    error.message = "Permission denied";
  } else if (error instanceof InvalidTokenError) {
    error.message = "Bad credentials";
  } else if (error instanceof UnauthorizedError) {
    error.message = "Requires authentication";
  }

  error.statusCode = error.statusCode || 500;
  error.status = error.status || "ERROR";
  response.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
  return;
};

export default errorHandler;
