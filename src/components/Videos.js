//main component of search app
//gets list of videos from App component
import React from 'react';
import './Images.css';
import DisplayVideo from'./DisplayVideo';

const Videos = ({videos, selectedVideo}) => {
    //maps over all the videos and return new array of videos
    const listVideos = videos.map((video) => {
        return <DisplayVideo key={video.id.videoID} video={video} selectedVideo={selectedVideo} />
    });

    return <div className="style__image">
                {listVideos}
            </div>;
};

export default Videos;

