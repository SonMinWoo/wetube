import express from "express";
import routes from "../routes";
import { getUpload, postUpload, video_detail, getEdit_video, postEditVideo , delete_video } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), video_detail);

//Edit Video
videoRouter.get(routes.editVideo(), getEdit_video);
videoRouter.post(routes.editVideo(), postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), delete_video);

export default videoRouter;
