import axios from 'axios';
const KEY  = 'AIzaSyAZ4EROlXWta_7vZzBBdhSu85HrmtDiyBE';

export default axios.create({
    baseURL : `https://www.googleapis.com/youtube/v3/`,
    params:{
        part:'snippet',
        maxResult:10,
        key:KEY,
    }
})