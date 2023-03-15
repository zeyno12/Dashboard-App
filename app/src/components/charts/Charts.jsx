import React from 'react';
import "./Charts.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Charts=({title,data,dataKey,grid})=>{
  
return(
    <div className='chart'>
        <h3 className='chart_title'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd' />
                <Line type="monotone" stroke='#5550bd' dataKey={dataKey}/>
                <Tooltip/>
               {grid && <CartesianGrid stroke='#cacaca' strokeDasharray="5 5"/>}
                <Legend/>
            </LineChart>
        </ResponsiveContainer>
    </div>
    )
}
export default Charts;