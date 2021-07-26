import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";


const WidgetSm = () => {
    return(
        <div className="WidgetSm">
            <span className="WidgetSmTitle">New Join Members</span>
            <ul className="WidgetList">
                <li className="WidgetItem">
                    <img alt="sample" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetImg"/>
                    <div className="widgeSmUser">
                        <span className="widgeSmUsername">Jony Keller</span>
                        <span className="widgeSmUsertitle">Software Developer</span>
                    </div>
                    <button className="btn"><Visibility className="visible"/>Dislpay</button>
                </li>

                <li className="WidgetItem">
                    <img alt="sample" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetImg"/>
                    <div className="widgeSmUser">
                        <span className="widgeSmUsername">Jony Keller</span>
                        <span className="widgeSmUsertitle">Software Developer</span>
                    </div>
                    <button className="btn"><Visibility className="visible"/>Dislpay</button>
                </li>

                <li className="WidgetItem">
                    <img alt="sample" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetImg"/>
                    <div className="widgeSmUser">
                        <span className="widgeSmUsername">Jony Keller</span>
                        <span className="widgeSmUsertitle">Software Developer</span>
                    </div>
                    <button className="btn"><Visibility className="visible"/>Dislpay</button>
                </li>

                <li className="WidgetItem">
                    <img alt="sample" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetImg"/>
                    <div className="widgeSmUser">
                        <span className="widgeSmUsername">Jony Keller</span>
                        <span className="widgeSmUsertitle">Software Developer</span>
                    </div>
                    <button className="btn"><Visibility className="visible"/>Dislpay</button>
                </li>

                <li className="WidgetItem">
                    <img alt="sample" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetImg"/>
                    <div className="widgeSmUser">
                        <span className="widgeSmUsername">Jony Keller</span>
                        <span className="widgeSmUsertitle">Software Developer</span>
                    </div>
                    <button className="btn"><Visibility className="visible"/>Dislpay</button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm;