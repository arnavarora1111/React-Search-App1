//Root component of search app
import React from 'react';
import axios from 'axios';
import InputField from './InputField';
import Images from './Images';
import youtubeAPI from '../videoapi/youtubeAPI';
import Videos from './Videos';
import PlayVideo from './PlayVideo';
//unsplash API key
const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {
    state = {
        images: [],
        videos: [],
        videoSelect: null,
        searchTerm: null,
        clickedVideos: []
    };

    //converts function to a promise with use of async
    imageSubmit = async (val) => {
        //makes API call to unsplash
        //limits results to 7 pictures
        const response = await axios.get('https://api.unsplash.com/search/photos?page=1&per_page=7', {
            params: {query: val},
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        })

        this.setState({searchTerm: val})

        //all images are contained in list inside data.results
        //updates images with those inside data.results
        this.setState({images:response.data.results})

        //makes API call to youtube
        const response2 = await youtubeAPI.get('/search', {
            params: {
                q:val
            }
        })

        //updates videos with those inside data.items
        this.setState({
            videos: response2.data.items
        })
    };

    //updates videoSelect when user clicks on a video
    selectedVideo = (video) => {
        this.setState({videoSelect: video})
    }

    render() {
        return (
            <div>
                <InputField userSubmit={this.imageSubmit} />
                <span className='displayText'> 
                    Displaying: {this.state.images.length} pictures 
                    and {this.state.videos.length} videos
                </span>
                <div>
                    <PlayVideo video={this.state.videoSelect}/>
                </div>
                <Images foundImages={this.state.images} clickedVideos={this.state.clickedVideos} 
                searchTerm={this.state.searchTerm} />
                <Videos selectedVideo={this.selectedVideo} 
                        videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;