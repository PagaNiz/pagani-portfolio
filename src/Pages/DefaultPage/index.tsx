import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import Header from "../../Components/Header"
import { IDefaultPage } from "../../Interfaces/IDefaultPage"
import themeStyles from "../../Variables/theme.module.css"


const DefaultPage = ({children}: IDefaultPage) => {
    return (
        <Fragment>
            <Header/>
            <div className={themeStyles.container}>
                <Outlet/>
                {children}
            </div>
            <h1>Default Page</h1>
        </Fragment>
    )
}

export default DefaultPage