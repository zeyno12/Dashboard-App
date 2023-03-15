import React from 'react';
import Charts from '../../components/charts/Charts';
import Featuredinfo from '../../components/featured/Featuredinfo';
import "./Home.css";
import { userdata } from '../../dummyDta';
import Widgets from '../../components/widgets/Widgets';
import Widgetl from '../../components/widgetl/Widgetl';
const Home=()=>{
return(
    <div className='home'>
        <Featuredinfo/>
        <Charts data={userdata} title='User Analytics' grid dataKey="Active User" />
        <div className='homeWidgets'>
           <Widgets/>
           <Widgetl/>
        </div>
    </div>
    )
}
export default Home;