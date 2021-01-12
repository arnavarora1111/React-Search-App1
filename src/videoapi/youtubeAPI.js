import axios from 'axios';
const API_KEY_VIDEO = process.env.REACT_APP_API_KEY_VIDEO
// const KEY = 'AIzaSyD2pBOfT6lxWA9_-bC4k1QLiwg61qqs5DQ';
const KEY = `${API_KEY_VIDEO}`

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 2,
        key: KEY
    }
})