import VideoItem from './VideoItem.js';

function VideoList(props) {
  return (
    <ul className="video-list">
      {props.videos
        .map((video) => (
          <VideoItem image={video.image} title={video.title} author={video.author} />
        ))}
    </ul>
  );
}

export default VideoList;