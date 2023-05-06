import { useTheme } from "@emotion/react";
import { Box, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import FlexBetween from "./flexBetween";
import { ChevronLeft, ChevronLeftOutlined } from "@mui/icons-material";
import { navList } from "../lists/navList";

function Sidebar({ drawerWidth, openSidebar, setOpenSidebar, isNonMobile }) {
    const { pathname } = useLocation();
    const [active, setActive] = useState("")
    const navigate = useNavigate()
    const theme = useTheme()
    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])
    return (
        <Box component="nav" >
            {openSidebar && (
                <Drawer
                    open={openSidebar}
                    onClose={() => setOpenSidebar(false)}
                    variant='persistent'
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "boarder-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}>


                    <Box width="100%" >
                        <Box margin="1.5rem 2rem 2rem 3rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display="flex" alignItems='center' gap="0.5rem">
                            <Typography variant="h4" fontWeight="bold">ETHIO-MART</Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
                                    <ChevronLeft />
                                </IconButton>
                            )}
                        </FlexBetween>
                                </Box>
                        <List>
                            {navList.map((item) => {
                                if (!item.icon) {
                                    return (
                                        <Typography key={item.text} sx={{ m: "2.5rem 0 1rem 3rem" }}>
                                            {item.text}
                                        </Typography>
                                    )
                                }
                                const lowerText = item.text.toLowerCase
                                return (
                                    <ListItem disablePadding key={item.text}>
                                        <ListItemButton onClick={() => {
                                            navigate(`/${lowerText}`)
                                            setActive(lowerText)
                                        }}
                                            sx={{
                                                backgroundColor: active === lowerText ? theme.palette.secondary[300] : "transparent",
                                                color: active === lowerText ? theme.palette.primary[600] : theme.palette.secondary[100]
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: active === lowerText ? theme.palette.primary[600] : theme.palette.secondary[200]
                                                }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                            {
                                                active === lowerText && (
                                                    <ChevronLeftOutlined sx={{ml:"auto"}}/>
                                                )
                                            }
                                               
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>

                    </Box>
                </Drawer>
            )

            }

        </Box>
    )
}

export default Sidebar