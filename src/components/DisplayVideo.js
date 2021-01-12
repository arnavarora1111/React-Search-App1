//child component of Videos component
//gives back deatils on the specific video selected
import React from 'react';

const DisplayVideo = ({video, selectedVideo}) => {
    return ( 
        <div onClick={() => selectedVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div>
                <div>YouTube Video (Click on video to play)</div>
            </div>
        </div>
    )
};

export default DisplayVideo;