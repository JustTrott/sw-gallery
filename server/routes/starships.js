import express from "express";

import { getStarships } from "../controllers/starship.js";

const router = express.Router();

router.get("/", getStarships);

export default router;
