import { Box, useTheme } from "@mui/material"
import { useGetCustomersQuery } from "../state/api"
import Header from "../components/header"
import { DataGrid } from "@mui/x-data-grid"


function Customers() {
    const theme = useTheme()
    const { data, isLoading } = useGetCustomersQuery()
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex:1
        },
        {
            field: "name",
            headerName: "Name",
            flex:0.5
        },
        {
            field: "email",
            headerName: "Email",
            flex:0.5
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.5,
            
        },
        {
            field: "country",
            headerName: "Country",
            flex:0.4
        },
        
        {
            field: "occupation",
            headerName: "Occupation",
            flex:1
        },
        {
            field: "role",
            headerName: "Role",
            flex:0.5
        },
      
    ]

    return (
        <Box m="1.5rem  2.5rem">
            <Header title="CUSTOMERS" subtitle="list of customers" />
            <Box>
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row)=>row._id}
                    rows={data || []}
                    columns={columns}
                />
            </Box>
            
</Box>
    )
}

export default Customers