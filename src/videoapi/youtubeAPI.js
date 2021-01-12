import axios from 'axios';
//youtube API Key
const API_KEY_VIDEO = process.env.REACT_APP_API_KEY_VIDEO
const KEY = `${API_KEY_VIDEO}`

//makes network request to the youtube API
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        //snippet gives back useful information about the video
        //includes video title, url, and description of video
        part: 'snippet',
        //limits the results to 2 videos
        maxResults: 2,
        key: KEY
    }
})