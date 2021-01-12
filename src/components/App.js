import React from 'react';
import axios from 'axios';
import InputField from './InputField';
import Images from './Images';
import youtubeAPI from '../videoapi/youtubeAPI';
import Videos from './Videos';
import PlayVideo from './PlayVideo';
const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {
    state = {
        images: [],
        videos: [],
        selectedVideo: null 
    };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        })

        this.setState({images:response.data.results})

        const response2 = await youtubeAPI.get('/search', {
            params: {
                q:term
            }
        })
        this.setState({
            videos: response2.data.items
        })
    };

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div>
                <InputField userSubmit={this.onSearchSubmit} />
                <span>Found: {this.state.images.length} images and  
                             {this.state.videos.length} videos
                </span>
                <div>
                    <PlayVideo video={this.state.selectedVideo}/>
                </div>
                <Images foundImages={this.state.images} />
                <Videos handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;




