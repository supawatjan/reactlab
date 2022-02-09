import { HiHome,HiShoppingCart,HiUser,HiTruck } from "react-icons/hi";
import { RiCoupon2Fill} from "react-icons/ri";

const MenuData = [
    {
        name: "Home",
        icon: <HiHome/>,
        path: "/home"
    },
    {
        name: "Profile",
        icon: <HiUser/>,
        path: "/profile"
    },
    {
        name: "Shopping",
        icon: <HiShoppingCart/>,
        path: "/shopping"
    },
    {
        name: "Tracking",
        icon: <HiTruck/>,
        path: "/tracking"
    },
    {
        name: "Coupon",
        icon: <RiCoupon2Fill/>,
        path: "/coupon"
    },
    
]

export default MenuData