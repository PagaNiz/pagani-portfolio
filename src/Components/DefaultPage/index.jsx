import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import themeStyles from '../../Styles/theme.module.scss';
import NavBar from "../Navbar";

const DefaultPage = ({children}) => {
    return (
        <Fragment>
            <NavBar/>
            <div className={themeStyles.container}>
                <Outlet/>
                {children}
            </div>
        </Fragment>
    )
}

export default DefaultPage