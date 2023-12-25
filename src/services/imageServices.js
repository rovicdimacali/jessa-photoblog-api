// src/services/imageService.js
import * as imageModel from "../models/imageModel.js";

// export async function createImage(imageData) {
//   return await imageModel.createImage(imageData);
// }

export async function createImages(imageData) {
  return await imageModel.createImages(imageData);
}

export async function getImage(id) {
  return await imageModel.getImage(id);
}

export async function getImages() {
  return await imageModel.getImages();
}

export async function getAlbumImages(album_id) {
  return await imageModel.getAlbumImages(album_id);
}

export async function updateImage(imageData) {
  return await imageModel.updateImage(imageData);
}

export async function deleteImage(image_id) {
  return await imageModel.deleteImage(image_id);
}

export async function deleteAlbumImages(album_id) {
  return await imageModel.deleteAlbumImages(album_id);
}
// Add other image-related functions as needed
