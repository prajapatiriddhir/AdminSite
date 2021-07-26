import React from "react";
import "./home.css";
import FeatureInfor from "../../componets/featureInfor/FeatureInfor";
import Chart from "../../componets/charts/Chart";
import {data} from "../../data";
import WidgetLg from "../../componets/WidgetLg/WidgetLg";
import WidgetSm from "../../componets/widgetSm/WidgetSm";

const Home = () => {
    return( 
            <div className="home">
                <FeatureInfor/>
                <Chart data={data} title="User Analytics" grid dataKey="Active User"/>
                <div className="homevisit">
                    <WidgetSm/>
                    <WidgetLg/>
                   
                </div>
            </div>
    )
}


export default Home;