//main component of search app
//gets list of videos from App component
import React from 'react';
import './Images.css';
import DisplayVideo from'./DisplayVideo';

class Videos extends React.Component {
    state = {
        clickedImages: []
    }

    //function appends the url link to clickedImages Array
    //function called when user clicks on an image
    callbackFunction = (childData) => {
        console.log(this.props.searchTerm)
        this.setState({clickedImages: [...this.state.clickedImages, childData]})
        console.log(childData)
        console.log(this.state.clickedImages)
    }

    render() {
        const {videos, selectedVideo} = this.props;
            //maps over all the videos and return new array of videos
            const listVideos = videos.map((video) => {
                return <DisplayVideo key={video.id.videoID} video={video} 
                        selectedVideo={selectedVideo} 
                        parentCallback = {this.callbackFunction}/>
            });

        return (
                <div className="style__image"> {listVideos} </div>
            )
    }
};
export default Videos;

