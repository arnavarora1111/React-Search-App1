//main component of search app
//gets list of videos from App component
import React from 'react';
import './Images.css';
import DisplayVideo from'./DisplayVideo';

class Videos extends React.Component {
    state = {
        clickedImages: []
    }

    //sends url to the main App Component
    sendUrlToApp = (url) => {
        this.props.parentCallBack1(url);
    }

    render() {
        const {videos, selectedVideo} = this.props;
            //maps over all the videos and return new array of videos
            const listVideos = videos.map((video) => {
                return <DisplayVideo key={video.id.videoID} video={video} 
                        selectedVideo={selectedVideo} 
                        parentCallback = {this.sendUrlToApp}/>
            });

        return (
                <div className="style__image"> {listVideos} </div>
            )
    }
};
export default Videos;

