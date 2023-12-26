import express from "express"
import { login, register } from "../controller/authController.js"

export const AuthRooter = express.Router()

AuthRooter.post("/register",register)
AuthRooter.post("/login",login)