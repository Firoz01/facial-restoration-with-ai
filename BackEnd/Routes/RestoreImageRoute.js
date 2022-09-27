import express from "express";
import Replicate from "replicate-js";
import upload from "../Utils/multer.js";
import uploadSingleImageToCloudinary from "../Utils/uploadImage.js";
const replicate = new Replicate({
  token: "199d612865cb395b240d43732e5379deae34dbe2",
});
const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const folderName = "aiProject";
    const cloudinaryResult = await uploadSingleImageToCloudinary(
      req.file.path,
      folderName
    );

    const cloudinaryImageUrl = cloudinaryResult.secure_url;

    const gfpgan = await replicate.models.get("tencentarc/gfpgan");
    const restoreImageOutput = await gfpgan.predict({
      img: cloudinaryImageUrl,
    });
    res.status(200).json({
      restoreImageOutput: restoreImageOutput,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
