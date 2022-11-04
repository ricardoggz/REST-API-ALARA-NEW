import { Router } from "express"
import { getCompanies } from "../controllers/companies.js"

export const companyRouter = Router()
//routes
companyRouter.get('/companies', getCompanies)