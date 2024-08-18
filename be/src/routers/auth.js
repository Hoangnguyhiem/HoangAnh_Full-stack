import express, { Router } from "express";
import { logout, refreshToken, signin, signup } from "../controllers/auth.js";
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/refresh-token", refreshToken);
router.post("/logout", logout);
export default router;
