// src/models/albumModel.js
import pool from "../config/database.js";

export async function createAlbum(albumData) {
  const [result] = await pool.query(
    `INSERT INTO album (album_name, description, image_cover)
        VALUES (?, ?, ?)`,
    [albumData.album_name, albumData.description, albumData.image_cover]
  );
  return result.insertId;
}

export async function getAlbum(id) {
  const [rows] = await pool.query(
    `SELECT * 
    FROM album 
    WHERE id = ?`,
    [id]
  );
  return rows;
}

export async function getAlbums() {
  const [rows] = await pool.query(
    `SELECT * 
    FROM album `
  );
  return rows;
}

export async function deleteAlbum(id) {
  await pool.query(`DELETE FROM album WHERE id = ?`, [id]);
}

export async function updateAlbum(albumData) {
  const { id, album_name, description, image_cover } = albumData;

  const updateFields = [];
  const updateValues = [];

  if (album_name !== null && album_name !== undefined) {
    updateFields.push("album_name = ?");
    updateValues.push(album_name);
  }

  if (description !== null && description !== undefined) {
    updateFields.push("description = ?");
    updateValues.push(description);
  }

  if (image_cover !== null && image_cover !== undefined) {
    updateFields.push("image_cover = ?");
    updateValues.push(image_cover);
  }

  const updateQuery = `
    UPDATE album
    SET ${updateFields.join(", ")}
    WHERE id = ?
  `;

  const updateParams = [...updateValues, id];

  await pool.query(updateQuery, updateParams);
}

// Add other album-related functions as needed
