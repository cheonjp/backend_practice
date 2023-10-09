import express from "express"
import { postBlog } from "../controllers/blog.controller.js"

const router = express.Router()

router.post("/upload",postBlog)

export default router
