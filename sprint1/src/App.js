import React from 'react';
import './styles/styles.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Title from './components/Title.js';
import IntroContent from './components/IntroContent.js';
import Conversation from './components/Conversation.js';
import CommentNum from './components/CommentNum.js';
import Comments from './components/Comments.js';
import Sidevideos from './components/Sidevideos.js';
// import Video from './components/Video.js';


class App extends React.Component {
  state = {
    mainVideo: {
      id: 'type of <string>',
      title: 'BMX Rampage: 2018 Highlights',
      description: 'type of <string>',
      channel: 'type of <string>',
      image: 'type of <string>',
      views: 'type of <string>',
      likes: 'type of <string>',
      duration: 'type of <string>',
      video: 'type of <string>',
      timestamp: 'type of <number>',
      comments: 'type of <array>' 
  },

  sidevideos: [
    {
    id: 1, 
    title: 'type of <string>', 
    channel: 'type of <string>', 
    image: './assets/Images/video-list-1.jpg' 
  }
  ]
}
  render(){
    return (
      <div className="App">

        <Header />
        <Hero />
        <main>
          <div className="leftCol">
          <Title mainVideo={this.state.mainVideo}/>
          <IntroContent />
          <CommentNum />
          <Conversation />
          <Comments />
          </div>

          <div className="rightCol">
          <Sidevideos sidevideos={this.state.sidevideos}/>
          </div>
        </main>

      </div>
    );
  }
  
}


export default App;