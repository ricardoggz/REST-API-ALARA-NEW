import { Router } from "express"
import { userLogin } from "../controllers/users.js"

export const userRouter = Router()
//routes
userRouter.post('/user-login', userLogin)