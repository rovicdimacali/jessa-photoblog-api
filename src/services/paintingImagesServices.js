// src/services/imageService.js
import * as paintingImageModel from "../models/paintingImagesModel.js";

// export async function createImage(imageData) {
//   return await paintingImageModel.createImage(imageData);
// }

export async function createImages(imageData) {
  return await paintingImageModel.createImages(imageData);
}

export async function getImage(id) {
  return await paintingImageModel.getImage(id);
}

export async function getImages() {
  return await paintingImageModel.getImages();
}

export async function getAlbumImages(album_id) {
  return await paintingImageModel.getAlbumImages(album_id);
}

export async function updateImage(imageData) {
  return await paintingImageModel.updateImage(imageData);
}

export async function deleteImage(image_id) {
  return await paintingImageModel.deleteImage(image_id);
}

export async function deleteAlbumImages(album_id) {
  return await paintingImageModel.deleteAlbumImages(album_id);
}
// Add other image-related functions as needed
