import express from "express";
import routes from "../routes";
import { user_detail, edit_profile, change_password } from "../controllers/userController";
import { onlyPrivate } from "../middlewares"

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, edit_profile);
userRouter.get(routes.changePassword, onlyPrivate, change_password);
userRouter.get(routes.userDetail(), user_detail);

export default userRouter;