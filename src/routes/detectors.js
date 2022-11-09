import { Router } from "express"
import {
    getDetectors,
    postDetector,
    putDetector,
    deleteDetector
} from "../controllers/detectors.js"

export const detectorRouter = Router()

detectorRouter.get('/detectors', getDetectors)
detectorRouter.post('/insert-detector', postDetector)
detectorRouter.put('/update-detector/:id', putDetector)
detectorRouter.delete('/delete-detector', deleteDetector)