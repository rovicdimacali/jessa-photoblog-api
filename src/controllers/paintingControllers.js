import * as paintingServices from "../services/paintingServices.js";
import {
  getAlbumImages,
  deleteAlbumImages,
} from "../models/paintingImagesModel.js";
import * as responseUtils from "../utils/responseUtils.js";

export const createAlbumController = async (req, res) => {
  try {
    const { album_name } = req.body;
    const { description } = req.body;
    const { image_cover } = req.body;

    // Call your service function with the extracted data
    const result = await paintingServices.createAlbum({
      album_name,
      description,
      image_cover,
    });
    const album = await paintingServices.getAlbum(result);

    // Respond with the result
    responseUtils.sendSuccessResponse(res, album);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getAlbumsController = async (req, res) => {
  try {
    // Call your service function with the extracted data
    const albums = await paintingServices.getAlbums();

    // Fetch images for each album
    const albumsWithImages = await Promise.all(
      albums.map(async (album) => {
        const images = await getAlbumImages(album.id);
        return { ...album, images };
      })
    );

    // Respond with the result
    responseUtils.sendSuccessResponse(res, albumsWithImages);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateAlbumController = async (req, res) => {
  try {
    const { album_name, description, image_cover } = req.body;
    const id = req.params.id;

    // Call your service function with the extracted data
    const result = await paintingServices.updateAlbum({
      id,
      album_name,
      description,
      image_cover,
    });
    const album = await paintingServices.getAlbum(id);

    // Respond with the result
    responseUtils.sendSuccessResponse(res, album);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export async function deleteAlbumController(req, res) {
  const id = req.params.id;
  try {
    await deleteAlbumImages(id);
    await paintingServices.deleteAlbum(id);
    responseUtils.sendSuccessResponse(res, "Image successfully deleted.");
  } catch (error) {
    console.log(error);
    responseUtils.sendErrorResponse(res, 500, "Failed to get images.");
  }
}
