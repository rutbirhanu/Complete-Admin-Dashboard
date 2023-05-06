import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material"
import { useDispatch } from "react-redux"
import FlexBetween from "./flexBetween"
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from "@mui/icons-material"
import { setMode } from "../state/reducer"

function Navbar() {
    const dispatch = useDispatch()
    const theme = useTheme()

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
                </FlexBetween>

            </Toolbar>

        </AppBar>
    )
}

export default Navbar