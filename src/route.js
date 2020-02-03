import HomeMain from "./views/HomeMain/HomeMain";
import ListCar from "./views/ListCar/ListCar";


export const homeRoutes=[
    {
        path: "/home/main",
        name: "",
        component:HomeMain,
        layout: "/home"
    },
    {
        path: "/home/ve-xe-tu-/:start/:end/:date",
        name: "",
        component:ListCar,
        layout: "/home"
    },
]
