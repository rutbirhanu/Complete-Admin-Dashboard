
import { AdminPanelSettingsOutlined, CalendarMonthOutlined, ChevronLeft, Groups2Outlined, HomeOutlined, PieChartOutline, PointOfSaleOutlined, PublicOutlined, ReceiptLongOutlined, ShoppingCartOutlined, TodayOutlined, TrendingUpOutlined } from "@mui/icons-material";

export const navList = [
    {
        text: "Dashboard",
        icon:<HomeOutlined/>
    },
    
    {
        text: "Client Facing",
        icon: null
    },

    {
        text: "Products",
        icon:<ShoppingCartOutlined/>
    },

    {
        text: "Customers",
        icon:<Groups2Outlined/>
    },

    {
        text: "Transactions",
        icon:<ReceiptLongOutlined/>
    },

    {
        text: "Geography",
        icon:<PublicOutlined/>
    },

    {
        text: "Sales",
        icon: null
    },

    {
        text: "Overview",
        icon: <PointOfSaleOutlined/>
    },

    {
        text: "Daily",
        icon: <TodayOutlined/>
    },

    {
        text: "Monthly",
        icon: <CalendarMonthOutlined/>
    },

    {
        text: "Breakdown",
        icon: <PieChartOutline/>
    },

    {
        text: "Management",
        icon: null
    },

    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined/>
    },

    {
        text: "Performance",
        icon: <TrendingUpOutlined/>
    },

]
