import React from "react";
import "./featureInfor.css";

import { ArrowDownward, ArrowUpward} from "@material-ui/icons";



const FeatureInfor = () => {
    return( 
            <div className="featured">
                <div className="featureItem">
                    <span className="fetureTitle">Revanue</span>
                    <div className="featureMoneyConatiner">
                        <span className="featureMoney">$10,100</span>
                        <span className="featureMoneyRate">-14<ArrowDownward className="featureIcons negative"/></span>
                    </div>
                    <span className="featureSubtitle">Compared to last month</span>
                </div>

                <div className="featureItem">
                    <span className="fetureTitle">Sales</span>
                    <div className="featureMoneyConatiner">
                        <span className="featureMoney">$12,100</span>
                        <span className="featureMoneyRate">-10<ArrowDownward className="featureIcons negative"/></span>
                    </div>
                    <span className="featureSubtitle">Compared to last month</span>
                </div>

                <div className="featureItem">
                    <span className="fetureTitle">Cost</span>
                    <div className="featureMoneyConatiner">
                        <span className="featureMoney">$15,100</span>
                        <span className="featureMoneyRate">+15<ArrowUpward className="featureIcons"/></span>
                    </div>
                    <span className="featureSubtitle">Compared to last month</span>
                </div>
            </div>
    )
}


export default FeatureInfor;