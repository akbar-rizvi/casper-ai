import express from "express"
const router=express.Router()
import controllers from "../controllers";
import { authenticateUser } from "../middleware";



export default router