import React from 'react';
import "./product.css";
import {Link} from "react-router-dom";
import Chart from "../../componets/charts/Chart"
import {Productdata} from "../../data";
import { Publish } from "@material-ui/icons";


function Product() {
    return (
        <div className="product">
            <div className="productTitleContaine">
                <h1 className="title">Product</h1>
                <Link to="/newProduct">
                <button className="btnData">Create</button>
                </Link>
            </div>
            <div className="proTop">
                <div className="proleft">
                <Chart data={Productdata} dataKey="Sales" title="Sales Performance"/> 
                </div>
                <div className="proright">
                    <div className="proInfoTop">
                    <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="proImg"
                        />
                    <span className="proName">Apple</span>
                    </div>
                    <div className="proInfoBottom">
                        <div className="proItems">
                            <span className="proInfoKey">id:</span>
                            <span className="proInfoValue">123</span>
                        </div>
                        <div className="proItems">
                            <span className="proInfoKey">sales:</span>
                            <span className="proInfoValue">55</span>
                        </div>
                        <div className="proItems">
                            <span className="proInfoKey">active</span>
                            <span className="proInfoValue">yes</span>
                        </div>
                        <div className="proItems">
                            <span className="proInfoKey">in stock:</span>
                            <span className="proInfoValue">no</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="proBottom">
                <div className="proForm">
                    <div className="formLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple"/>
                        <lable> In Stock</lable>
                        <select name="instock" id="instock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <lable>Active</lable>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="formRight">
                        <div className="proUpadol">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="uplaodImg"
                        />
                        
                        <label htmlFor="file"><Publish  className="icons"/></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                    </div>
            <button className="btnUpdate">Update</button>
                </div>
            </div>

        </div>
    )
}

export default Product;
