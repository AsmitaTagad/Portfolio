import { Router } from "express";
import { ContactMe } from "../controllers/contactMe.js";

const router = Router();

router.post("/contactme", ContactMe);

export default router;
