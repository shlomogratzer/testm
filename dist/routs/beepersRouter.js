"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const beepersController_1 = require("../controllers/beepersController");
const BASE_URL = '/api/beepers';
const router = express_1.default.Router();
router.get(`${BASE_URL}/`, beepersController_1.getAll);
// router.get(`${BASE_URL}/:id`, getById)
// router.get(`${BASE_URL}/status/:status`, getByStatus)
router.post(`${BASE_URL}/`, beepersController_1.create);
// router.put(`${BASE_URL}/:id/status`, changeStatus)
// router.delete(`${BASE_URL}/:id`, deleteBeeper)
exports.default = router;
