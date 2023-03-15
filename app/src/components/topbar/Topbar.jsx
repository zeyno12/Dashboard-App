import React from 'react';
import "./Topbar.css";
import logo  from "../image/icons8-airbnb-50.png";
import avarat_img from "../image/zey_pp.jpg"
 const Topbar=()=>{
return(
    <div className='topbar'>
        <div className='topbar_wrapper'>
            <div className='topbar_left'>
                
                    <img src={logo} alt="logo" />
                
            </div>
            <div className='topbar_right'>
                <div className="icon_container">
                <i class="bi bi-bell-fill"></i>
                <span className='icon_badge'>2</span>
                </div>
                <div className="icon_container">
                <i class="bi bi-globe-asia-australia"></i>
                <span className='icon_badge'>2</span>
                </div>
                <div className="icon_container">
                <i class="bi bi-gear-wide-connected"></i>
                </div>
                <div className='avarat_img'>
                    <img src={avarat_img} alt='image'/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Topbar;