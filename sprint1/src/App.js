import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Title from './components/Title';
import IntroContent from './components/IntroContent';
import Conversation from './components/Conversation';
import CommentNum from './components/CommentNum';
import Comments from './components/Comments';
// import Sidevideos from './components/Sidevideos.js';
// import Video from './components/Video.js';
import VideoList from './components/VideoList';
import videoData from './data/videoData.json';
// import commentsData from './data/commentsData.json';


class App extends React.Component {
  state = {
    videos: videoData,
    currentVideo: videoData[3],
    comments: [
      { id:1, 
        content:"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.", 
        author:"Author #1", 
        date:"02/13/2021"
      },

      { id:2, 
        content:"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.", 
        author:"Author #2", 
        date:"02/13/2021"
      },

      { id:3, 
        content:"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!", 
        author:"Author #3", 
        date:"02/13/2021"
      }
    ]
  };

  addComment = (event) => {
    event.preventDefault();

    const item = {
      id: Math.random() * 999999,
      content: event.target.message.value,
      date:"02/13/2021",
    }
   
    this.setState(
      {comments: [...this.state.comments, item]}
    )

    event.target.reset();
  }

  handleSelectVideo = (id) => {
    const calledVideo = videoData.find ((video) => video.id === id);

    this.setState({
      currentVideo: calledVideo
    });
  };

  render() {
    const filteredVideo = this.state.videos.filter((video) => video.id !== this.state.currentVideo.id);

    return (
      <div className="App">
        <Header />
        <Hero currentVideo={this.state.currentVideo}/>
    
        <main>
          <div className="leftCol">
          <Title currentVideo={this.state.currentVideo}/>
          <IntroContent currentVideo={this.state.currentVideo}/>
          <CommentNum />
          <Conversation submitHandler={this.addComment} />
          <ol>
            {this.state.comments.map(item => {
              return (<li>{item.content}</li>)
            })}
            </ol>

          <Comments />
          </div>

          <div className="rightCol">
          <h3 className="marginFix">NEXT VIDEOS</h3>
          <VideoList videos={filteredVideo} selectVideo={this.handleSelectVideo} />
          </div>
        </main>
      </div>
    );
  } 
}

export default App;
