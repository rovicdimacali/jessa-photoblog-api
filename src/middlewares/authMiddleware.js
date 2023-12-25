// src/middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import * as responseUtils from "../utils/responseUtils.js";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return responseUtils.sendErrorResponse(
      res,
      401,
      "Access denied. No token provided."
    );
  }

  const token = authHeader.split(" ")[1]; // Extract the token without "Bearer "

  jwt.verify(
    token,
    "N18DZOBbg8Y54JDw73Q/uXI5BvsAjXUxhxd8+4+ZwoQ=",
    { algorithms: ["HS256"] },
    (err, decoded) => {
      if (err) {
        console.log(err);

        return responseUtils.sendErrorResponse(res, 403, "Invalid token.");
      }
      req.decoded = decoded;
      console.log("Decoded Token:", decoded);
      next();
    }
  );
};
