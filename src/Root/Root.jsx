import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
    
    };

export default Root;