import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { IDefaultPage } from "../../Interfaces/IDefaultPage";
import themeStyle from "../../Variables/theme.module.css";

const DefaultPage = ({ children }: IDefaultPage) => {
  return (
    <Fragment>
      <Header />
      <div className={themeStyle.container}>
        <Outlet />
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default DefaultPage;
