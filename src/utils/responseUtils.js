// src/utils/responseUtils.js

export function sendSuccessResponse(res, data) {
  res.status(200).json({
    success: true,
    data: data,
  });
}

export function sendErrorResponse(res, statusCode, message) {
  res.status(statusCode).json({
    success: false,
    error: {
      code: statusCode,
      message: message,
    },
  });
}
