import React from 'react';
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin  from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const Calendar=()=>{
return(
    <div className='calendar'>
        <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={
            {
                start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay' // will normally be on the right. if RTL, will be on the left
              }
        }
        height={"80vh"}
        />
    </div>
    )
}
export default Calendar;