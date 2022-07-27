import React, { useState } from 'react';
import "./Sidebar.css";
import dp from './image/dp.png'
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useEffect } from 'react';

export default function Sidebar() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        db.collection("rooms").onSnapshot(snapShot => {
            setRooms(snapShot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])
    console.log(rooms);

    return (
        <div className='sidebar'>
            <div className='sidebarHeader'>
                <div>
                    <img src={dp} alt="" />
                </div>
                <div className="sidebarHeaderRight">
                    <button style={{ border: "none" }}><span className="material-symbols-outlined">
                        auto_mode</span></button>
                    <button style={{ border: "none" }}><span className="material-symbols-outlined">
                        chat
                    </span></button>
                    <button style={{ border: "none" }}><span className="material-symbols-outlined">
                        more_vert
                    </span></button>
                </div>
            </div>
            <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" placeholder="Search Contact" />
                </div>
            </div>
            <div className="sidebarChats">
            <SidebarChat addNewChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            </div>
        </div>
    );
}
