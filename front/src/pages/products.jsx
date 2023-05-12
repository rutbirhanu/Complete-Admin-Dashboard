import { Box } from "@mui/material"
import { useGetProductsQuery } from "../state/api"
import Header from "../components/header"

function Products() {
    const { data, isLoading } = useGetProductsQuery()
    console.log(data)
    return (
        < Box >
            <Header title="PRODUCTS" subtitle="See your list of products" />
        </Box >
    )
}


export default Products