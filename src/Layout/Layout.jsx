import { Outlet } from "react-router-dom";
import Navbar from "../Components/UserShared/Navbar/Navbar";
import Footer from "../Components/UserShared/Footer/Footer";


const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;