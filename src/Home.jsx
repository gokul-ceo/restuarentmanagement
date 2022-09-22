import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from "./homeasserts/HomeHeader";
import RecentOrders from "./homeasserts/RecentOrders";
import GroupDiv from "./homeasserts/GroupDiv";
import RecentBills from "./homeasserts/RecentBills";
import SalesDiv from "./homeasserts/Sales";
import Bulkorderdiv from "./homeasserts/Bullkorderdiv";
function Home(){
    return<>
    <HomeHeader/>
    <RecentOrders/>
    <GroupDiv/>
    <RecentBills/>
    <SalesDiv/>
    <Bulkorderdiv/>
    </>
}

export default Home;