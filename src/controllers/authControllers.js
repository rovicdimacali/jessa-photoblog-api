// src/controllers/authControllers.js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userServices from "../services/userServices.js";
import * as responseUtils from "../utils/responseUtils.js";

export const registerController = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await userServices.getUserByUsername(username);
    if (existingUser) {
      return responseUtils.sendErrorResponse(
        res,
        400,
        "Username already exists"
      );
    }

    // Create user
    const userId = await userServices.createUser({ username, password });

    responseUtils.sendSuccessResponse(res, { userId });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await userServices.getUserByUsername(username);
    if (!user) {
      return responseUtils.sendErrorResponse(
        res,
        401,
        "Invalid username or password"
      );
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return responseUtils.sendErrorResponse(
        res,
        401,
        "Invalid username or password"
      );
    }

    // Create and send JWT token
    const token = jwt.sign(
      { userId: user.id, username },
      "N18DZOBbg8Y54JDw73Q/uXI5BvsAjXUxhxd8+4+ZwoQ=",
      {
        expiresIn: "1h", // Set an appropriate expiration time
      }
    );

    responseUtils.sendSuccessResponse(res, { token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
