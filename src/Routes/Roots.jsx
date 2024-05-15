import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Roots = () => {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>            
        </div>
    );
};

export default Roots;