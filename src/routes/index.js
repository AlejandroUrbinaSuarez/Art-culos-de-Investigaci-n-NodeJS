import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index"));

router.get("/inicio", (req, res) => res.render("inicio"));

router.get("/registro", (req, res) => res.render("registro"));

export default router;
