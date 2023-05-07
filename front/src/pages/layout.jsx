import { Box, useMediaQuery } from "@mui/material"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { useGetUserQuery } from "../state/api"
import { useSelector } from "react-redux"


function Layout() {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [openSidebar, setOpenSidebar] = useState(true)
    const userId = useSelector((state) => state.global.userId)
    const { data } = useGetUserQuery(userId)
    console.log(data)
    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
            />
            <Box>
                <Navbar
                    openSidebar={openSidebar}
                    setOpenSidebar={setOpenSidebar} />

                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout