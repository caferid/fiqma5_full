import express from "express"
import authMiddleware from "../middleware/authMiddleware.js";
import { userDeleteById, userGetAll, userUpdateById } from "../controller/userController.js";

export const userRooter = express.Router()


userRooter.delete('/users/:id', authMiddleware,userDeleteById);

userRooter.get('/users', userGetAll);


userRooter.put('/users/:id', authMiddleware , userUpdateById);