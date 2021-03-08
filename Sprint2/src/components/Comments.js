import React from 'react'

function Comments() {
    return (

<div className="conversationContainer">

    <div className="innerConvers">
        <div className="avatarCol">
            <div className="avatar">
            <img src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg" alt="Avatar"/>
            </div>
        </div>

        <div className="commentCol">
            <div className="commentAuthor">Michael Lyons</div>
            <div className="commentDate">12/18/2019</div>
            <div className="comment">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.</div>
        </div>
    </div>

    <div className="innerConvers">
        <div className="avatarCol">
            <div className="avatar">
            <img src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg" alt="Avatar"/>
            </div>
        </div>

        <div className="commentCol">
            <div className="commentAuthor">Gary Wong</div>
            <div className="commentDate">12/18/2019</div>
            <div className="comment">Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!</div>
         </div>
    </div>

    <div className="innerConvers">
        <div className="avatarCol">
            <div className="avatar">
            <img src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg" alt="Avatar" />
            </div>
        </div>

        <div className="commentCol">
            <div className="commentAuthor">Theodore Duncan</div>
            <div className="commentDate">12/18/2019</div>
            <div className="comment">How can someone be so good!!!
            You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</div>
        </div>
    </div>

</div>
    
    );
}

export default Comments
