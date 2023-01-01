import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from "./homeasserts/HomeHeader";
import RecentOrders from "./homeasserts/RecentOrders";
import GroupDiv from "./homeasserts/GroupDiv";
import RecentBills from "./homeasserts/RecentBills";
import SalesDiv from "./homeasserts/Sales";
import Bulkorderdiv from "./homeasserts/Bullkorderdiv";
import store from './Redux/store.js'
import { Provider } from "react-redux";
import Extramenu from "./homeasserts/Extramenus.jsx";
function Home(){
    return<React.Fragment>
    <Provider store={store} >
    <HomeHeader/>
    <Extramenu/>
    <RecentOrders/>
    <GroupDiv/>
    <RecentBills/>
    <SalesDiv/>
    <Bulkorderdiv/>
    </Provider>
    </React.Fragment>
}

export default Home;