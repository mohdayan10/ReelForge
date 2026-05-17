import { Router } from "express";

import {
    registerUser,
    loginUser,
    isAuth,
    logoutUser, 
    refreshAccessToken
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);


// authorized routes
import authUser from "../middlewares/authUser.middleware.js";

userRouter.post('/auth', authUser, isAuth);
userRouter.post('/logout', authUser, logoutUser);
userRouter.get('/refresh-token', authUser, refreshAccessToken)


export { userRouter };