import Product from "../models/product.js"
import ProductStat from "../models/productStat.js"
import Transaction from "../models/transaction.js"
import User from "../models/user.js"

export const getProducts = async (req, res) => {

    try {
        const products = await Product.find()
        const productWithStat = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                })
                return {
                    ...product._doc,
                    stat
                }
            })
        )
        res.status(200).json(productWithStat)

    }
    catch (err) {
        res.status(404).json({ message: err })
    }
}


export const getCustomers = async (req, res) => {
    
    try {
        const customers = await User.find({ role: "user" }).select("-password")
        res.status(200).json(customers)
    }

    catch (err) {
        res.status(404).json({message:err})
    }
}

export const getTransactions = async (req, res) => {
    try {
        const { page = 1, pagesize = 20, sort = null, search = "" } = req.query
        const generatSort = () => {
            const sortParsed = JSON.parse(sort)
            const sortFormatted = {
                [sortParsed.field]: sortParsed.sort ="asc" ? 1:-1
            }
            return sortFormatted
        }
        const formetedSort = Boolean(sort) ? generatSort():{}
        const data = await Transaction.find({
            $or: [
                { cost: {$regex: new RegExp(search, "i") } },
                {userId:{$regex: new RegExp(search, "i")}}
            ]
        }).sort(formetedSort)
            .skip(page-1 * pagesize)
        .limit(pagesize)
        
        const total = await Transaction.countDocuments({
            name:{$regex:search, $options:"i"}
        })

        res.status(200).json({
            data, total
        })

    }

    
    catch (err) {
        res.status(404).json({message:err.message})
    }
}