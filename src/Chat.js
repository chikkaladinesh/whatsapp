import React from 'react';
import "./Chat.css"


export default function Chat() {
  return (
    <div className="chat">
        <div className="chatHeader">
    <img src="https://cdn-icons-png.flaticon.com/128/3011/3011270.png" alt="" />
    <div className="chatHeaderInfo">
        <h3>Room Name</h3> 
        <p>Last seen at ...</p>
    </div>
    <div className="chatHeaderRight">
    <button style={{border:'none'}}><span className="material-symbols-outlined">
search</span></button>
<button style={{border:'none'}}><span className="material-symbols-outlined">
attach_file</span></button>
<button style={{border:'none'}}><span className="material-symbols-outlined">
more_vert</span></button>
    </div>
    </div>
    <div className="chatBody">
      <p className="chatMessage">
<span className="chatName">Sourab</span>
      Hllo Guys!
      <span className="timestamp">18:55</span>
      </p>
      <p className="chatMessage">
<span className="chatName">Sourab</span>
      Hllo Guys!
      <span className="timestamp">18:55</span>
      </p>
      <p className="chatMessage">
<span className="chatName">Sourab</span>
      Hllo Guys!
      <span className="timestamp">18:55</span>
      </p>
      <p className="chatMessage chatReceiver">
<span className="chatName">Sanjay</span>
      Whats Up...?
      <span className="timestamp">18:59</span>
      </p>
    </div>
    <div className="chatFooter">
      <span className="material-symbols-outlined">mood</span>
      <form>
        <input type="text" placeholder="Type a message" />
        <button type="submit" style={{border:'none'}}>
          <span className="material-symbols-outlined">send</span>
        </button>
        <button style={{border:'none'}}>
          <span className="material-symbols-outlined">mic</span>
        </button>
      </form>
    </div>
    </div>
  );
}
