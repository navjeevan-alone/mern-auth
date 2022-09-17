import express from 'express';
import { login, signup } from '../controller/AuthController.js';

const router = express.Router();
router.get("/", (req, res) => {
    res.send("auth route working")
});
router.post("/login", login);
router.post("/signup", signup);

export default router;