//child component of Videos component
//gives back deatils on the specific video selected
import React from 'react';

class DisplayVideo extends React.Component {

    //sends url to parent component (Videos.js)
    sendUrl = (url) => {
        this.props.parentCallback('https://www.youtube.com/watch?v=' + url);
    }

    render () {
        const {video,selectedVideo} = this.props;
        return ( 
            <div onClick={() => {selectedVideo(video);
                this.sendUrl(video.id.videoId)}}>
                <img src={video.snippet.thumbnails.medium.url} 
                        alt={video.snippet.description}/>
                <div>
                    <div>YouTube Video (Click on video to play)</div>
                </div>
            </div>
        )
    }
};
export default DisplayVideo;