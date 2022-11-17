import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";


const events = [
    {
        title: "Getting to know you",
        start: new Date(2022, 7, 15),
        end: new Date(2022, 7, 15),
        colorEvento:'#ff9800',
    },
    {
        title: "Sketching practice",
        start: new Date(2022, 8, 16),
        end: new Date(2022, 8, 16),
        colorEvento:'#ff9800',
    },
    {
        title: "Project 1 check in",
        start: new Date(2022, 8, 26),
        end: new Date(2022, 8, 26),
        colorEvento:'#ff9800',
    },
    {
        title: "HTML and CSS practice",
        start: new Date(2022, 8, 23),
        end: new Date(2022, 8, 23),
        colorEvento:'#ff9800',
    },
    {
        title: "Javascript practice",
        start: new Date(2022, 8, 30),
        end: new Date(2022, 8, 30),
        colorEvento:'#ff9800',
    },
    {
        title: "Which smart object project 1",
        start: new Date(2022, 8, 23),
        end: new Date(2022, 8, 23),
        colorEvento:'#ff9800',
    },
    {
        title: "Project 1 implementation",
        start: new Date(2022, 9, 14),
        end: new Date(2022, 9, 14),
        colorEvento:'#ff9800',
    },
    {
        title: "Project 1 documentation",
        start: new Date(2022, 9, 16),
        end: new Date(2022, 9, 16),
        colorEvento:'#ff9800',
    },
    {
        title: "First assignment",
        start: new Date(2022, 7, 29),
        end: new Date(2022, 7, 29),
        colorEvento:'#2196F3',
    },
    {
        title: "User profiles",
        start: new Date(2022, 7, 29),
        end: new Date(2022, 7, 29),
        colorEvento:'#2196F3',
    },
    {
        title: "Tasks",
        start: new Date(2022, 7, 29),
        end: new Date(2022, 7, 29),
        colorEvento:'#2196F3',
    },
    {
        title: "Timeline",
        start: new Date(2022, 7, 29),
        end: new Date(2022, 7, 29),
        colorEvento:'#2196F3',
    },
    {
        title: "Project status update",
        start: new Date(2022, 7, 29),
        end: new Date(2022, 7, 29),
        colorEvento:'#2196F3',
    },
    {
        title: "Project status update",
        start: new Date(2022, 7, 29),
        end: new Date(2022, 7, 29),
        colorEvento:'#2196F3',
    },
    {
        title: "first assignment",
        start: new Date(2022, 7, 29),
        end: new Date(2022, 7, 29),
        colorEvento:'#04AA6D',
    },
    {
        title: "Linear algebra review",
        start: new Date(2022, 8, 9),
        end: new Date(2022, 8, 9),
        colorEvento:'#04AA6D',
    },
    {
        title: "Rasterization exercise",
        start: new Date(2022, 8, 26),
        end: new Date(2022, 8, 26),
        colorEvento:'#04AA6D',
    },
    {
        title: "Transformations exercise",
        start: new Date(2022, 8, 23),
        end: new Date(2022, 8, 23),
        colorEvento:'#04AA6D',
    },
    {
        title: "Projection exercises",
        start: new Date(2022, 8, 30),
        end: new Date(2022, 8, 30),
        colorEvento:'#04AA6D',
    },
    {
        title: "Texture mapping exercises",
        start: new Date(2022, 9, 5),
        end: new Date(2022, 9, 5),
        colorEvento:'#04AA6D',
    },
    {
        title: "Color",
        start: new Date(2022, 9, 14),
        end: new Date(2022, 9, 14),
        colorEvento:'#04AA6D',
    },
    {
        title: "Light and shadow",
        start: new Date(2022, 9, 26),
        end: new Date(2022, 9, 26),
        colorEvento:'#04AA6D',
    },
    {
        title: "Team meeting",
        start: new Date(2022, 9, 12),
        end: new Date(2022, 9, 12),
        colorEvento:'#2196F3',
    },
];

function CanvasCalendar() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    const locales = {
        "en-US": require("date-fns/locale/en-US"),
    };
    const localizer = new dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });

    

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
    

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
    }
        
        
        setAllEvents([...allEvents, newEvent]);
    }
    function openForm() {
        document.getElementById("myForm","outlook").style.display = "block";
      }
      
    function closeForm() {
        document.getElementById("myForm","outlook").style.display = "none";
    }

    return (
        <div className="App">
            <br></br>
            <button className="open-button" onClick={openForm}>Microsoft Outlook</button>
            <button className="open-button" onClick={openForm}>Google Calendar</button>
            <button className="open-button" onClick={openForm}>Apple Calendar</button>
                <div className="form-popup" id="myForm">
                    <form className="form-container">
                        <h1>Account Login</h1>
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required></input>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>

                        <button type="submit" className="btn">Login</button>
                        <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
                    </form>
                </div>
            <h2>Create New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "30%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> <br></br>
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button> <br></br>
                <br></br>
                </div>
                    <div className='child1'>
                        <br></br>
                        <br></br>
                        <button className="coursebtn default">All courses</button><br></br>
                        <button className="coursebtn computer_graphics">Computer Graphics</button><br></br>
                        <button className="coursebtn senior_design">Senior Design</button><br></br>
                        <button className="coursebtn userinter">User Interfaces</button><br></br>
                        </div>
                    <div>
                <Calendar 
                localizer={localizer} 
                events={allEvents}
                eventPropGetter={(allEvents) => {
                    const backgroundColor = allEvents.colorEvento ? allEvents.colorEvento : '#EE0122';
                    return { style: { backgroundColor } }
                  }}
                defaultDate={new Date(2022, 9, 1)}
                startAccessor="start" 
                endAccessor="end" 
                style={{ height: 700, margin: "50px" }} 
                /> 
                    </div>
        </div>
    );

    }

export default CanvasCalendar;