import "react-router-dom";
import Header from "../components/Header";
import VideoThumb from "../components/VideoThumb";
import '../styles/upload-styles.css';
import VideoUpldForm from "../components/VideoUpldForm";


function Upload () {
    return (
        <div>
            <Header />
            <div className="main">
            <h1>Upload Video</h1>
                <div>
                    <div className="upldPanel">
                        <div className="videothumb">
                            <h4>VIDEO THUMBNAIL</h4>
                            <VideoThumb />
                        </div>

                        <div>
                            <VideoUpldForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
