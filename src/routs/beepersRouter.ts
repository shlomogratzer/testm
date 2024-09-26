import  express from "express";
import {create,getAll} from '../controllers/beepersController'
const BASE_URL = '/api/beepers'
const router = express.Router()

router.get(`${BASE_URL}/`,getAll)
// router.get(`${BASE_URL}/:id`, getById)
// router.get(`${BASE_URL}/status/:status`, getByStatus)
router.post(`${BASE_URL}/`, create)
// router.put(`${BASE_URL}/:id/status`, changeStatus)
// router.delete(`${BASE_URL}/:id`, deleteBeeper)

export default router