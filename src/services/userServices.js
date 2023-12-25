// src/services/userService.js
import * as userModel from "../models/userModel.js";

export async function createUser(userData) {
  return await userModel.createUser(userData);
}

export async function getUserByUsername(username) {
  return await userModel.getUserByUsername(username);
}
