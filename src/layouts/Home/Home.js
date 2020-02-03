import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import {homeRoutes} from "../../route";

/*Render routes */
// eslint-disable-next-line no-unused-vars
const switchRoutes = (
    <Switch>
        {
            homeRoutes.map((prop, key) => {
            if (prop.layout === "/home") {
                return (
                    <Route
                        path={prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
            return null;
        })}
        <Redirect from="/home" to="/home/main" />
    </Switch>
);
// eslint-disable-next-line no-unused-vars
const Home = props => {
    return (
        <div>
        <Header/>
            {
                switchRoutes
            }
        <Footer/>
        </div>
    );
};
export default Home;
