import express from "express";

import { getPlanets } from "../controllers/planet.js";

const router = express.Router();

router.get("/", getPlanets);

export default router;
