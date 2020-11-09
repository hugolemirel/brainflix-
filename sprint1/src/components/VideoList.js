import VideoItem from './VideoItem.js';

function VideoList(props) {
  return (
    <ul className="video-list">
      {props.videos
        // .filter((video) => video.id !== 2)
        .map((video) => (
          // <li>{video.name}</li>
          <VideoItem image={video.image} title={video.title} author={video.author} />
        ))}
    </ul>
  );
}

export default VideoList;