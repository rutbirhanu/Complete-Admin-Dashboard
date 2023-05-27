/* eslint-disable react/prop-types */
import { Box, Button, Card, CardActions, CardContent, Collapse, Rating, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useGetProductsQuery } from "../state/api"
import Header from "../components/header"
import { useState } from "react";


const Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat
}) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false)

    return <Card
        sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt
        }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[200]} gutterBottom>
                {category}
            </Typography>

            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
                ${Number(price).toFixed(2)}
            </Typography>
            <Rating value={rating} readOnly />
            <Typography variant="body2">
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="primary"
                size="small"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                See More
            </Button>
        </CardActions>
        <Collapse
            in={isExpanded}
            timeout="auto"
            unmountOnExit
            sx={{ color: theme.palette.neutral[300] }}
        >
            <CardContent>
                <Typography> id:{_id}</Typography>
                <Typography> Supply Left: {supply}</Typography>
                <Typography> Yearly Sales This Year:{stat.yearlSalesTotal}</Typography>
                <Typography> Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}</Typography>
            </CardContent>

        </Collapse>

    </Card>
}


function Products() {
    const { data, isLoading} = useGetProductsQuery()
    const isNonMobile = useMediaQuery("(min-width:1000px)")

    return (
        < Box m="1.5rem  2.5rem">
            <Header title="PRODUCTS" subtitle="See your list of products" />
            {data ? (
                <Box mt="20px" display="grid" gridTemplateColumns="repeat(4,minmax(0,1fr))"
                    rowGap="20px"
                    columnGap="1.33%"
                    justifyContent="space-between"
                    sx={{
                        "& > div": {
                            gridColumn: isNonMobile ? undefined : "span 4"
                        }
                    }}>

                    {data.map(({ _id,
                        name,
                        description,
                        price,
                        rating,
                        category,
                        supply,
                        stat }) => (
                        <Product key={_id} _id={_id} name={name} description={description}
                            supply={supply} price={price} rating={rating} category={category}
                            stat={stat}
                        />
                    )
                    )}
                </Box>
            ) :
                (<>Loading .....</>)
            }
        </Box >
    )
}


export default Products