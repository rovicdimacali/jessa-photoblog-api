import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const multerMiddleware = upload.none();

export default multerMiddleware;
