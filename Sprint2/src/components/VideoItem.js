
function VideoItem(props) {
    return (
      <li className="video-list__item">
        <img className="video-list__img" src={props.image} alt={props.title} />
        
        <div className="video-list_rightCol">
        <p className="video-list__title">{props.title}</p>
        <p className="video-list__author">{props.author}</p>
        </div>
      </li>
    );
  }
  
  export default VideoItem;
  