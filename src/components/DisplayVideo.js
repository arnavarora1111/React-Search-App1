//child component of Videos component
//gives back deatils on the specific video selected
import React from 'react';

class DisplayVideo extends React.Component {
    sendUrl = (url) => {
        // console.log(url);
        // console.log(this.state.clickedImagesList);
        this.props.parentCallback(url);
    }

    render () {
        const {video,selectedVideo} = this.props;
        return ( 
            <div onClick={() => {selectedVideo(video);
                this.sendUrl(video.snippet.thumbnails.medium.url)}}>
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