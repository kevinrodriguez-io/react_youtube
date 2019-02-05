import axios from 'axios';
const KEY = 'AIzaSyBgooS8ptfIViiDTqyQqt4_3PD_BoXRhag';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
