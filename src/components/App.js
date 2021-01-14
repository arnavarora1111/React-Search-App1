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
        clickedImages: []
    };

    //writes url into a json file
    //called when user clicks on a image or video
    callbackFunction1 = (childData) => {
        console.log(this.state.searchTerm)
        //appends url to clickedImages List
        console.log("Before: ", this.state.clickedImages)
        this.setState({clickedImages: [...this.state.clickedImages, childData]})
        console.log(childData)
        console.log("After: ", this.state.clickedImages)

        var dict = {};
        var tempList = [];
        var copyClicked = this.state.clickedImages
        //tempList created since state not updated immediately
        tempList = [...copyClicked, childData]
        console.log("Temp list: ", tempList)
        //SearchTerm is the key and the updated clickedImages List is the value
        dict[this.state.searchTerm] = tempList
        console.log(dict)
        var json = JSON.stringify(dict);
        var a = document.createElement("a")
        var file = new Blob([json], {type: 'text/json'});
        a.href = URL.createObjectURL(file);
        //saves file as interest.json each time user clicks on image or video
        a.download = "interest.json";
        a.click();
    }

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
                <Images foundImages={this.state.images} 
                        parentCallBack1={this.callbackFunction1} />
                        
                <Videos selectedVideo={this.selectedVideo} 
                        parentCallBack1={this.callbackFunction1}
                        videos={this.state.videos}/>
            </div>
        )
    }
}
export default App;