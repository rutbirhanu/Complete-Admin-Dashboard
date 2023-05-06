import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Dashboard from "./pages/dashboard"
import Layout from "./pages/layout"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { themeSettings } from "./theme"
import "./App.css"


function App() {

  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace/>} />
             <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
        </ThemeProvider>
    </div>
  )
}

export default App
