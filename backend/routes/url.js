import { Router } from "express";
import * as urlController from "../controllers/url.js";

const router = Router();

router.post("/", urlController.createShortUrl);

router.get("/:id", urlController.getShortUrl);

router.post("/:id/visit", urlController.visitShortUrl);

export default router;
