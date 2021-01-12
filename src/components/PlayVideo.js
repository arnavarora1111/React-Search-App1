//plays the video when user clicks on item
import React from 'react';

//initializes video
const PlayVideo = ({video}) => {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
            </div>
        </div>

    )
}

export default PlayVideo;