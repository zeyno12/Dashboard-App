import React from 'react';
import "./Featuredinfo.css";
const Featuredinfo=()=>{
return(
    <div className='featured'>
        <div className="featured_item">
            <span className='featured_title'>Revanue</span>
            <div className='featured_money_con'>
                <span className='featured_money'>$2,69</span>
                <span className='featured_money_rate'>-11,9<i class="bi bi-arrow-down featuredIcon negative"></i></span>
            </div>
            <span className='featured_sub'>Compared to last month</span>
        </div>
        <div className="featured_item">
            <span className='featured_title'>Sales</span>
            <div className='featured_money_con'>
                <span className='featured_money'>$5,69</span>
                <span className='featured_money_rate'>-99,9<i class="bi bi-arrow-down featuredIcon negative"></i></span>
            </div>
            <span className='featured_sub'>Compared to last month</span>
        </div>
        <div className="featured_item">
            <span className='featured_title'>Cost</span>
            <div className='featured_money_con'>
                <span className='featured_money'>$100,99</span>
                <span className='featured_money_rate'>+41,9<i class="bi bi-arrow-up featuredIcon"></i></span>
            </div>
            <span className='featured_sub'>Compared to last month</span>
        </div>
    </div>
    )
}
export default Featuredinfo;