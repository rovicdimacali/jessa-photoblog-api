// src/models/imageModel.js
import pool from "../config/database.js";

// export async function createImage(imageData) {
//   const [result] = await pool.query(
//     `INSERT INTO images (album_id, image_name, image_url, description)
//         VALUES (?, ?, ?, ?)`,
//     [
//       imageData.album_id,
//       imageData.image_name,
//       imageData.image_url,
//       imageData.description,
//     ]
//   );
//   return result.insertId;
// }

export async function createImages(imageDataArray) {
  const insertIds = [];

  console.log(parseInt(imageDataArray.album_id[0], 10));
  for (let i = 0; i < imageDataArray.album_id.length; i++) {
    const result = await pool.query(
      `INSERT INTO images (album_id, image_url )
      VALUES (?, ?)`,
      [parseInt(imageDataArray.album_id[i], 10), imageDataArray.image_url[i]]
    );
    insertIds.push(result.insertId);
  }

  return insertIds;
}

export async function getImage(id) {
  const [rows] = await pool.query(
    `SELECT * 
    FROM images 
    WHERE id = ?`,
    [id]
  );
  return rows;
}

export async function getAlbumImages(album_id) {
  const [rows] = await pool.query(
    `SELECT * 
    FROM images 
    WHERE album_id = ?`,
    [album_id]
  );
  return rows;
}

export async function getImages() {
  const [rows] = await pool.query(
    `SELECT * 
    FROM images`
  );
  return rows;
}

export async function updateImage(imageData) {
  const { image_id, album_id, image_name, image_url, description } = imageData;

  const updateFields = [];
  const updateValues = [];

  if (album_id !== null && album_id !== undefined) {
    updateFields.push("album_id = ?");
    updateValues.push(album_id);
  }

  if (image_name !== null && image_name !== undefined) {
    updateFields.push("image_name = ?");
    updateValues.push(image_name);
  }

  if (image_url !== null && image_url !== undefined) {
    updateFields.push("image_url = ?");
    updateValues.push(image_url);
  }

  if (description !== null && description !== undefined) {
    updateFields.push("description = ?");
    updateValues.push(description);
  }

  const updateQuery = `
    UPDATE images
    SET ${updateFields.join(", ")}
    WHERE id = ?
  `;

  const updateParams = [...updateValues, image_id];

  await pool.query(updateQuery, updateParams);
}

export async function deleteImage(image_id) {
  await pool.query(`DELETE FROM images WHERE id = ?`, [image_id]);
}

export async function deleteAlbumImages(album_id) {
  await pool.query(`DELETE FROM images WHERE album_id = ?`, [album_id]);
}

// Add other image-related functions as needed
