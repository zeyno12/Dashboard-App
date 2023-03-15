import React from 'react';
import "./userDetail.css";
import {Link} from "react-router-dom";
import userimage from "../../components/image/user_img.png"
const UserDetail=()=>{
return(
    <div className='userdetail'>
        <div className='user_title_con'>
            <h1 className='user_title'>Edit User</h1>
           <Link to="/newUser">
           <button className='user_btn'>Create</button>
           </Link>
        </div>
        <div className="user_container">
            <div className="user_show">
                <div className="user_show_top">
                    <img src={userimage} alt='image user' />
                    <div className='user_show_top_title'>
                        <span className='user_show_top_name'>Zeynus Bagirova</span>
                        <span className='user_show_top_title'>Software Enginer</span>
                    </div>
                </div>
                <div className="user_show_bottom">
                    <span className='user_show_bot_title'>Account Details</span>
                    <div className="user_show_info">
                    <i class="bi bi-person"></i>
                    <span className='user_show_bot_info'>zeynus777</span>
                    </div>
                    <div className="user_show_info">
                    <i class="bi bi-calendar"></i>
                    <span className='user_show_bot_info'>01.28.2002</span>
                    </div>
                    <span className='user_show_bot_title'>Contact Details</span>
                    <div className="user_show_info">
                    <i class="bi bi-telephone"></i>
                    <span className='user_show_bot_info'>0507944769</span>
                    </div>
                    <div className="user_show_info">
                    <i class="bi bi-envelope-at"></i>
                    <span className='user_show_bot_info'>zeynabbagirova1@gmail.com</span>
                    </div>
                    <div className="user_show_info">
                    <i class="bi bi-geo-alt"></i>
                    <span className='user_show_bot_info'>Baku,Azerbaijan</span>
                    </div>
                </div>
            </div>
            <div className="user_update">
                <span className='user_update_title'>Edit</span>
                <form className='uptade_form'>
                    <div className="user_up_left">
                        <div className="user_up_item">
                            <label>Username</label>
                            <input type="text" placeholder='zeynus777' className='up_input' />
                        </div>
                        <div className="user_up_item">
                            <label>Fullname</label>
                            <input type="text" placeholder='Zeynus Bagirova' className='up_input' />
                        </div>
                        <div className="user_up_item">
                            <label>Email</label>
                            <input type="text" placeholder='zeynabbagirova1@gmail.com' className='up_input' />
                        </div>
                        <div className="user_up_item">
                            <label>Phone</label>
                            <input type="text" placeholder='0507944769' className='up_input' />
                        </div>
                        <div className="user_up_item">
                            <label>Adress</label>
                            <input type="text" placeholder='Baku,Azerbaijan' className='up_input' />
                        </div>
                    </div>
                    <div className="user_up_right">
                        <div className="user_upload">
                            <img src={userimage} alt="" />
                            <label htmlFor="file"><i class="bi bi-download"></i></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className='user_up_btn'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
export default UserDetail;