import VideoItem from './VideoItem.js';

function VideoList(props, selectVideo) {
  return (
    <ul className="video-list">
      {props.videos.map((video) => (
        <button key={video.id} className="videoListBtn" onClick = {() => {selectVideo(video.id)}}>
      <VideoItem image={video.image} title={video.title} author={video.author} />
      </button>
        ))}
    </ul>
  );
}

export default VideoList;