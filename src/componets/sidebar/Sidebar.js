
  
import React from "react";
import './sidebar.css';
import {Link} from "react-router-dom";
import { LineStyle,Timeline,TrendingUp,Mail,Report,PermIdentity,Storefront,AttachMoney,DynamicFeed,ChatBubbleOutline,WorkOutline   } from "@material-ui/icons";

export default function Sidebar() {
  return (
 <div className="sidebar">
     <div className="sidebarWrapper">
        

         <div className="sideMenu">
             <h3 className="sideTitle">Dashbord</h3>
             <ul className="sidelist">
               <Link to="/" className="link">     
               <li className="listIteam">
                        <LineStyle className="sidebarIcon"/>
                        Home
                 </li>
               </Link>

                 <li className="listIteam">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                 </li>

                 <li className="listIteam">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                 </li>
             </ul>
         </div>

         
         <div className="sideMenu">
             <h3 className="sideTitle">Menu</h3>
             <ul className="sidelist">
                    <Link to="/users"  className="link">
                    <li className="listIteam">
                        <PermIdentity className="sidebarIcon"/>
                        User
                 </li>
                    </Link>
              
                     <Link to="/products" className="link">
                 <li className="listIteam ">
                        <Storefront  className="sidebarIcon"/>
                        Products
                 </li>
                     </Link>

                 <li className="listIteam">
                        <AttachMoney  className="sidebarIcon"/>
                        Transaction
                 </li>
                 <li className="listIteam">
                        <Report className="sidebarIcon"/>
                        Reports
                 </li>
             </ul>
         </div>

         
         <div className="sideMenu">
             <h3 className="sideTitle">Notification</h3>
             <ul className="sidelist">
                 <li className="listIteam">
                        <Mail className="sidebarIcon"/>
                        Mail
                 </li>

                 <li className="listIteam ">
                        <DynamicFeed  className="sidebarIcon"/>
                        Feedback
                 </li>

                 <li className="listIteam">
                        <ChatBubbleOutline  className="sidebarIcon"/>
                        Messages
                 </li>
             </ul>
         </div>

         
         <div className="sideMenu">
             <h3 className="sideTitle">Staff</h3>
             <ul className="sidelist">
                 <li className="listIteam">
                        <WorkOutline  className="sidebarIcon"/>
                        Manage
                 </li>

                 <li className="listIteam ">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                 </li>

                 <li className="listIteam">
                        <Report className="sidebarIcon"/>
                        Reports
                 </li>
             </ul>
         </div>

     </div>
 </div>
  );
}