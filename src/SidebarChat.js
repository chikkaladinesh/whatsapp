import React from 'react';
import './SidebarChat.css'

export default function SidebarChat({ addNewChat }) {
  return !addNewChat ? (
    <div className='sidebarChat'>
        <img src="https://cdn-icons-png.flaticon.com/128/3011/3011270.png" alt=" "></img>
        <div className="sidebarChatInfo">
            <h2>Code Room</h2>
            <p>This is Message</p>
        </div>
    </div>
    
  ):(
    <div className="sidebarChat">
        <h3>Add New Chat</h3>
    </div>

  );
}
