import express from "express"
import controllers from "../controllers";
import validators from "../validators";
import { validateRequest } from "../middleware";
import articleController from "../controllers/article";

const router=express.Router()

router.post('/generate-article',articleController.generateArticle);



export default router