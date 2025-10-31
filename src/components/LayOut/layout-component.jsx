import { Outlet } from "react-router-dom"
import Header from "../header/header-component"

const LayOut = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LayOut