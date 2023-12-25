// src/models/userModel.js
import pool from "../config/database.js";
import bcrypt from "bcrypt";

export async function createUser(userData) {
  const { username, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const [result] = await pool.query(
    `INSERT INTO users (username, password)
    VALUES (?, ?)`,
    [username, hashedPassword]
  );

  return result.insertId;
}

export async function getUserByUsername(username) {
  const [rows] = await pool.query(
    `SELECT * 
    FROM users 
    WHERE username = ?`,
    [username]
  );

  return rows[0];
}
