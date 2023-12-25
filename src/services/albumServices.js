// src/services/albumService.js
import * as albumModel from "../models/albumModel.js";

export async function createAlbum(albumData) {
  return await albumModel.createAlbum(albumData);
}

export async function getAlbum(id) {
  return await albumModel.getAlbum(id);
}

export async function getAlbums() {
  return await albumModel.getAlbums();
}

export async function updateAlbum(albumData) {
  return await albumModel.updateAlbum(albumData);
}

export async function deleteAlbum(id) {
  return await albumModel.deleteAlbum(id);
}
// Add other album-related functions as needed
