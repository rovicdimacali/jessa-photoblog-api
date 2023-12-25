// src/services/albumService.js
import * as paintingModel from "../models/paintingModel.js";

export async function createAlbum(albumData) {
  return await paintingModel.createAlbum(albumData);
}

export async function getAlbum(id) {
  return await paintingModel.getAlbum(id);
}

export async function getAlbums() {
  return await paintingModel.getAlbums();
}

export async function updateAlbum(albumData) {
  return await paintingModel.updateAlbum(albumData);
}

export async function deleteAlbum(id) {
  return await paintingModel.deleteAlbum(id);
}
// Add other album-related functions as needed
