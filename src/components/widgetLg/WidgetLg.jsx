import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">

                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7945489/pexels-photo-7945489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImage" />
                        <span className="widgetLgName">Ayşe Ayşe</span>
                    </td>
                    <td className="widgetLgDate">5 Sep 2021</td>
                    <td className="widgetLgAmount">$140.000</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7945489/pexels-photo-7945489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImage" />
                        <span className="widgetLgName">Ayşe Ayşe</span>
                    </td>
                    <td className="widgetLgDate">5 Sep 2021</td>
                    <td className="widgetLgAmount">$140.000</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7945489/pexels-photo-7945489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImage" />
                        <span className="widgetLgName">Ayşe Ayşe</span>
                    </td>
                    <td className="widgetLgDate">5 Sep 2021</td>
                    <td className="widgetLgAmount">$140.000</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7945489/pexels-photo-7945489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImage" />
                        <span className="widgetLgName">Ayşe Ayşe</span>
                    </td>
                    <td className="widgetLgDate">5 Sep 2021</td>
                    <td className="widgetLgAmount">$140.000</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}
