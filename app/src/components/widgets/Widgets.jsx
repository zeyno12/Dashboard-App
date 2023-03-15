import React from 'react';
import "./Widgets.css";
import userImage from "../image/user_img.png";
const Widgets=()=>{
return(
    <div className='widgets'>
        <span className='widget_title'>New join members</span>
        <ul className='widgetsm_list'>
            <li className='widgetsm_list_item'>
                <img src={userImage} alt="user image" className='widgetSmImg' />
                <div className='widgetsm_User'>
                    <span className='widgetsm_User_name'>Zeynush Bagirova</span>
                    <span className='widgetsm_User_title'>Front-end Developer</span>
                </div>
                <button className='widgetsm_button'>
                <i class="bi bi-eye-fill widgetSmIcon"></i> Display
                </button>
            </li>
            <li className='widgetsm_list_item'>
                <img src={userImage} alt="user image" className='widgetSmImg' />
                <div className='widgetsm_User'>
                    <span className='widgetsm_User_name'>Zeynush Bagirova</span>
                    <span className='widgetsm_User_title'>Front-end Developer</span>
                </div>
                <button className='widgetsm_button'>
                <i class="bi bi-eye-fill widgetSmIcon"></i> Display
                </button>
            </li>
            <li className='widgetsm_list_item'>
                <img src={userImage} alt="user image" className='widgetSmImg' />
                <div className='widgetsm_User'>
                    <span className='widgetsm_User_name'>Zeynush Bagirova</span>
                    <span className='widgetsm_User_title'>Front-end Developer</span>
                </div>
                <button className='widgetsm_button'>
                <i class="bi bi-eye-fill widgetSmIcon"></i> Display
                </button>
            </li>
            <li className='widgetsm_list_item'>
                <img src={userImage} alt="user image" className='widgetSmImg' />
                <div className='widgetsm_User'>
                    <span className='widgetsm_User_name'>Zeynush Bagirova</span>
                    <span className='widgetsm_User_title'>Front-end Developer</span>
                </div>
                <button className='widgetsm_button'>
                <i class="bi bi-eye-fill widgetSmIcon"></i> Display
                </button>
            </li>
            <li className='widgetsm_list_item'>
                <img src={userImage} alt="user image" className='widgetSmImg' />
                <div className='widgetsm_User'>
                    <span className='widgetsm_User_name'>Zeynush Bagirova</span>
                    <span className='widgetsm_User_title'>Front-end Developer</span>
                </div>
                <button className='widgetsm_button'>
                <i class="bi bi-eye-fill widgetSmIcon"></i> Display
                </button>
            </li>
            <li className='widgetsm_list_item'>
                <img src={userImage} alt="user image" className='widgetSmImg' />
                <div className='widgetsm_User'>
                    <span className='widgetsm_User_name'>Zeynush Bagirova</span>
                    <span className='widgetsm_User_title'>Front-end Developer</span>
                </div>
                <button className='widgetsm_button'>
                <i class="bi bi-eye-fill widgetSmIcon"></i> Display
                </button>
            </li>
        </ul>
    </div>
    )
}
export default Widgets;