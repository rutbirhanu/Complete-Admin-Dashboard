import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material"
import { useDispatch } from "react-redux"
import FlexBetween from "./flexBetween"
import { ArrowDropDownOutlined, DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from "@mui/icons-material"
import { setMode } from "../state/reducer"
import { useState } from "react"

function Navbar({openSidebar, setOpenSidebar, user}) {
    const dispatch = useDispatch()
    const theme = useTheme()
    const [anchor, setAnchor] = useState(null)
    const isOpen = Boolean(anchor)
    const handlerClick = (e) => { setAnchor(e.currentTarget) }
    const handleClose=()=>setAnchor(null)

    return (
        <AppBar sx={{
           position:'static',
            background: 'none',
            boxShadow: 'none'
        }}>
            <Toolbar sx={{ justifyContent:"space-between" }}>

                {/* LEFT SIDE */}
                
                <FlexBetween>
                    <IconButton onClick={() => { console.log("hello") }}>
                        <MenuIcon />
                    </IconButton>

                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius='9px'
                        gap='3rem'
                        p="5px 20px"
                    >
                        <InputBase placeholder="Search ..." />
                        <IconButton>
                        <Search/>
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>


                    {/* RIGHT SIDE */}
                <FlexBetween gap='1rem'>
                    <IconButton onClick={()=>dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (<DarkModeOutlined sx={{fontSize:"25px"}} />) : (<LightModeOutlined sx={{fontSize:"25px"}} />)}
                    </IconButton>
                    
                    <IconButton>
                        <SettingsOutlined sx={{fontSize:"25px"}} />
                    </IconButton>
                    <FlexBetween>
                        <Button onClick={handlerClick}  sx={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem"}}>
                        <Box
                                component="img"
                                src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"
                                alt="profile"
                                height="32px"
                                width="32px"
                                borderRadius="50%"
                                sx={{objectFit:'cover'}}
                            />
                             <Box>
                             <Typography fontWeight="bold" fontSize="0.8rem" sx={{color:theme.palette.secondary[100] }}>
                                    {user.name}
                                    </Typography>
                             <Typography  fontSize="0.7rem" sx={{color:theme.palette.secondary[200] }}>
                                    {user.occupation}
                                </Typography>
                                </Box> 

                            <ArrowDropDownOutlined sx={{color:theme.palette.secondary[200], fontSize:"30px"}} />

                        </Button>
                        <Menu anchor={anchor} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} >
                            <MenuItem>Log Out</MenuItem>
                        </Menu>
                    </FlexBetween>

                </FlexBetween>

            </Toolbar>

        </AppBar>
    )
}

export default Navbar