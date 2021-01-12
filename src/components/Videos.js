import React from 'react';
import './Images.css';
import DisplayVideo from'./DisplayVideo';

const Videos = ({videos, handleVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return <DisplayVideo key={video.id.videoID} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className="style__image">
                {renderedVideos}
            </div>;
};

export default Videos;

