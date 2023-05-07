import express from "express"
import {getUser} from "../controllers/general.js"

const router = express.Router()

router.route("/user/:id").get(getUser)


export default router