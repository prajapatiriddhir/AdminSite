
import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title,dataKey,data,grid}) => {
    return(
        <div className="Chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd"/>
                        <YAxis/>
                        <Line type="monotone" stroke="#5550bd" dataKey={dataKey}/>
                        <Tooltip/>
                       {grid && <CartesianGrid stroke="#e0dfdf"/>}
                        <Legend/>
                    </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default Chart;