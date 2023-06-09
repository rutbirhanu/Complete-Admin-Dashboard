import express from "express"
import bodyParser from "body-parser"
import helmet from "helmet"
import morgan from "morgan"
import dotenv from "dotenv"
import cors from "cors"
import clientRoutes  from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"
import mongoose from "mongoose"
import User from "./models/user.js"
import Product from "./models/product.js"
import ProductStat from "./models/productStat.js"
import Transaction from "./models/transaction.js"
import {dataUser, dataProduct, dataProductStat,dataTransaction } from "./data/index.js"


dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.use("/client",clientRoutes)
app.use("/general", generalRoutes)
app.use("/management",managementRoutes)
app.use("/sales",salesRoutes)


const port = process.env.PORT || 5000
mongoose.connect(process.env.DB_URL).then(() => {
    app.listen(port, () => console.log(`server started at port ${port}`))
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)

    
}).catch((err)=>console.log(err))