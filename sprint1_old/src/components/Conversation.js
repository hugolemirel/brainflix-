import React from 'react'

function Conversation() {
    return (
        <div className="formSection">
          <div className="avatarCell">
            <div className="avatar"><img src="../../../assets/Images/Mohan-muruge.jpg" /></div>
          </div>
        <div className="formCell">
        <div><h3>JOIN THE CONVERSATION</h3></div>
        <form>
        <textarea rows="5" name="message" placeholder="That was easily the most spectacular BMX moment ever!"></textarea>
        <button className="uploadBtn">COMMENT</button>
        </form>
        </div>
        </div>
    );
}


export default Conversation;