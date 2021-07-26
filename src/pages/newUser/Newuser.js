import React from 'react';
import "./newuser.css";

function Newuser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="userForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="roy"/>
                </div>

                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text" placeholder="roy patel"/>
                </div>

                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="roy@gmail.com"/>
                </div>

                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </div>

                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="852789412"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                <div className="userGender">
                <input type="radio" name="gender" id="male" value="male" placeholder="roy"/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" placeholder="roy"/>
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" placeholder="roy"/>
                    <label for="other">Other</label>
                </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="userSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>
                </div>
            </form>
            <button className="newBtn">Create</button>

        </div>

    )
}

export default Newuser
