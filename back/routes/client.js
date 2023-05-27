import express from "express"
import { getCustomers, getProducts, getTransactions } from "../controllers/client.js"
const router = express.Router()

router.route("/products").get(getProducts)
router.route("/customers").get(getCustomers)
router.route("/transactions").get(getTransactions)


export default router