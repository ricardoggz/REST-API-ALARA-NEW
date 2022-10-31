import { Router } from "express"
import {
    userLogin,
    getUsers,
    postUser,
    putUser,
    deleteUser
} from "../controllers/users.js"

export const userRouter = Router()
//routes
userRouter.get('/users', getUsers)
userRouter.post('/user-login', userLogin)
userRouter.post('/insert-user', postUser)
userRouter.put('/update-login/:id', putUser)
userRouter.delete('/delete-user', deleteUser)