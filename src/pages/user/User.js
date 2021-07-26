import React from 'react';
import "./user.css";
import {Link} from "react-router-dom";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";


function User() {
    return (
        <div className="userPage">
            <div className="userTitleContiner">
                <h3 className="userTitle">Edit User</h3>
                <Link to="/newUser">
                <button className="addBtn">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userDisplay">
                    <div className="userTop">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="img"
                        />
                        <div className="userTopTitle">
                            <span className="username">Riddhi Prajapati</span>
                            <span className="usertitle">Sotware Developer</span>

                        </div>
                    </div>
                    <div className="userBottom">
                        <span className="showTitle">Account Detalis</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userIcon" />
                            <span className="userShowInforTitle">Geeta</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userIcon" />
                            <span className="userShowInforTitle">5.12.1999</span>
                        </div>
                        <span className="showTitle">Contact Detalis</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userIcon" />
                            <span className="userShowInforTitle">+ 9517895210</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userIcon" />
                            <span className="userShowInforTitle">Geeta@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userIcon" />
                            <span className="userShowInforTitle">Gandhinagar</span>
                        </div>
                    </div>

                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="from">
                        <div className="userUpdateLeft">
                            <div className="userUpdateIteams">
                                <label>Username</label>
                                <input type="text" placeholder="Geeta" className="upfateInput" />
                            </div>

                            <div className="userUpdateIteams">
                                <label>Fullname </label>
                                <input type="text" placeholder="Riddhi Prajapati" className="upfateInput" />
                            </div>


                            <div className="userUpdateIteams">
                                <label>Email </label>
                                <input type="text" placeholder="Geeta@gmail.com" className="upfateInput" />
                            </div>


                            <div className="userUpdateIteams">
                                <label>Phone</label>
                                <input type="number" placeholder="9517895210" className="upfateInput" />
                            </div>

                            <div className="userUpdateIteams">
                                <label>Address</label>
                                <input type="text" placeholder="Gandhinagar" className="upfateInput" />
                            </div>




                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUplaod">
                                <img
                                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file"><Publish  className="icons"/></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="btn">Update</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default User
