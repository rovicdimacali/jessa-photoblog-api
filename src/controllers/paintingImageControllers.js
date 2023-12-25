// src/controllers/imageController.js
import * as paintingImagesServices from "../services/paintingImagesServices.js";
import * as responseUtils from "../utils/responseUtils.js";

// export async function createImageController(req, res) {
//   const { album_id, image_name, image_url, description } = req.body;

//   console.log({ album_id, image_name, image_url, description });
//   try {
//     const result = await paintingImagesServices.createImage({
//       album_id,
//       image_name,
//       image_url,
//       description,
//     });
//     console.log(result.insertId);
//     const image = await paintingImagesServices.getImage(result);
//     responseUtils.sendSuccessResponse(res, image);
//   } catch (error) {
//     console.log(error);
//     responseUtils.sendErrorResponse(res, 500, "Failed to create image.");
//   }
// }

export async function createImageController(req, res) {
  const imageDataArray = req.body;

  console.log("imageDataArray", imageDataArray);
  try {
    const insertIds = await paintingImagesServices.createImages(imageDataArray);
    const images = await paintingImagesServices.getImages(insertIds);
    responseUtils.sendSuccessResponse(res, images);
  } catch (error) {
    console.error(error);
    responseUtils.sendErrorResponse(res, 500, "Failed to create images.");
  }
}

export async function getImagesController(req, res) {
  try {
    const images = await paintingImagesServices.getImages();
    responseUtils.sendSuccessResponse(res, images);
  } catch (error) {
    responseUtils.sendErrorResponse(res, 500, "Failed to get images.");
  }
}

export async function updateImageController(req, res) {
  const { album_id, image_name, image_url, description } = req.body;
  const image_id = req.params.id;

  try {
    await paintingImagesServices.updateImage({
      image_id,
      album_id,
      image_name,
      image_url,
      description,
    });

    const updatedImage = await paintingImagesServices.getImage(image_id);
    responseUtils.sendSuccessResponse(res, updatedImage);
  } catch (error) {
    console.error(error);
    responseUtils.sendErrorResponse(res, 500, "Failed to update image.");
  }
}

export async function deleteImageController(req, res) {
  const image_id = req.params.id;
  try {
    await paintingImagesServices.deleteImage(image_id);
    responseUtils.sendSuccessResponse(res, "Image successfully deleted.");
  } catch (error) {
    responseUtils.sendErrorResponse(res, 500, "Failed to get images.");
  }
}

export async function deleteAlbumImagesController(req, res) {
  const album_id = req.params.album_id;
  try {
    await paintingImagesServices.deleteAlbumImages(album_id);
    responseUtils.sendSuccessResponse(res, "Image successfully deleted.");
  } catch (error) {
    console.log(error);
    responseUtils.sendErrorResponse(res, 500, "Failed to get images.");
  }
}
// Add other image-related controller functions as needed
