import Product from "../models/product"
import ProductStat from "../models/productStat"


export const getProducts = async (req, res) => {
   
    try {
    const products= await Product.find()
        
        
        
    }
    catch (err) {
        res.status(404).json({message:err})
    }
}

