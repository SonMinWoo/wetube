import express from "express";
import routes from "../routes";
import { getUpload, postUpload, video_detail, getEdit_video, postEditVideo , delete_video } from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), video_detail);

//Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEdit_video);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, delete_video);

export default videoRouter;
