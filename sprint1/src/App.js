import React from 'react';
import './styles/styles.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Title from './components/Title.js';
import IntroContent from './components/IntroContent.js';
import Conversation from './components/Conversation.js';
import CommentNum from './components/CommentNum.js';
import Comments from './components/Comments.js';
// import Sidevideos from './components/Sidevideos.js';
// import Video from './components/Video.js';
import VideoList from './components/VideoList.js';



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

  videos: [
    {
    id: 1, 
    title: 'Become A Travel Pro In One Easy Lesson…', 
    author: 'Scotty Cranmer', 
    image: './assets/Images/video-list-1.jpg' 
  },
  {
    id: 2, 
    title: 'Les Houches The Hidden Gem Of The…', 
    author: 'Scotty Cranmer', 
    image: './assets/Images/video-list-2.jpg' 
  },
  {
    id: 3, 
    title: 'Travel Health Useful Medical Information…', 
    author: 'Scotty Cranmer', 
    image: './assets/Images/video-list-3.jpg' 
  },
  {
    id: 4, 
    title: 'Cheap Airline Tickets Great Ways To Save', 
    author: 'Emily Harper', 
    image: './assets/Images/video-list-4.jpg' 
  },
  {
    id: 5, 
    title: 'Take A Romantic Break In A Boutique Hotel', 
    author: 'Ethan Owen', 
    image: './assets/Images/video-list-5.jpg' 
  },
  {
    id: 6, 
    title: 'Choose The Perfect Accommodations', 
    author: 'Lydia Perez', 
    image: './assets/Images/video-list-6.jpg' 
  },
  {
    id: 7, 
    title: 'Cruising Destination Ideas', 
    author: 'Timothy Austin', 
    image: './assets/Images/video-list-7.jpg' 
  },
  {
    id: 8, 
    title: 'Train Travel On Track For Safety', 
    author: 'Scotty Cranmer', 
    image: './assets/Images/video-list-8.jpg' 
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
          {/* <Sidevideos sidevideos={this.state.sidevideos}/> */}
          <h3 className="marginFix">NEXT VIDEOS:</h3>
          <VideoList videos={this.state.videos} />
          </div>
        </main>

      </div>
    );
  }
  
}

export default App;