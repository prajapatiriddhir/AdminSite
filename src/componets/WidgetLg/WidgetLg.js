import "./widgetLg.css";

const WidgetLg = () => {

    const Button = ({type}) => {
        return <button className={"btnLg "   + type}>{type}</button>
    }
    return(
        <div className="WidgetLg">
            <h3 className="WidgetLgTitle">Latest Transaction</h3>
            <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">Customer</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amont</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetUser">
                    <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgeLgName">Riddhi Prajapati</span>
            </td>

        <td className="date">5,Des 2021</td>
        <td className="amont">$11,000</td>
        <td className="status"><Button type="Approved"/></td>

                </tr>


                <tr className="WidgetLgTr">
                    <td className="WidgetUser">
                    <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgeLgName">Riddhi Prajapati</span>
            </td>

        <td className="date">5,Des 2021</td>
        <td className="date">$11,000</td>
        <td className="date"><Button type="Declined"/></td>

                </tr>


                <tr className="WidgetLgTr">
                    <td className="WidgetUser">
                    <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgeLgName">Riddhi Prajapati</span>
            </td>

        <td className="date">5,Des 2021</td>
        <td className="date">$11,000</td>
        <td className="date"><Button type="Pending"/></td>

                </tr>


                <tr className="WidgetLgTr">
                    <td className="WidgetUser">
                    <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgeLgName">Riddhi Prajapati</span>
            </td>

        <td className="date">5,Des 2021</td>
        <td className="date">$11,000</td>
        <td className="date"><Button type="Approved"/></td>

                </tr>

            </table>
        </div>
    )
}


export default WidgetLg;