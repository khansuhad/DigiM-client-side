import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;