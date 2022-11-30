import { Router } from "express";
const router = Router();

const loginController = require('../controllers/loginController')

router.get('/', loginController.mostrar)

export default router;