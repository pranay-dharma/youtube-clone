import React from 'react'
import SearchBar from './components/SearchBar'
import YoutubeApi from './components/YoutubeApi'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import './App.css'


class App extends React.Component{
  state ={
    videos:[],
    selectedVideo :'',
  };
  onSelectVideo = (video) => {
   this.setState({selectedVideo:video})
  }
  componentDidMount(){
    this.onTermSubmit('party mix 2022')
  }
  onTermSubmit =async(term) => {
   const res = await YoutubeApi.get('/search', {
      params:{
        q:term
      }
    });
   this.setState({videos:res.data.items, selectedVideo: res.data.items[0]})
  

    
  }
  render(){
    return(
    <>
      <div className='container'>
        <div className='box'>
          <h1 className='title'><i id='icon' class="fa-brands fa-square-youtube"></i>Youtube Clone</h1>
        </div>
      </div>
      <div className='output'>
        <div className='left' >
        <SearchBar onFormSubmit ={this.onTermSubmit} />
       
       <VideoDetails video={this.state.selectedVideo} />
      </div>
      <div className='right-box'>
        <VideoList videos ={this.state.videos} onSelectVideo = {this.onSelectVideo}/>
      </div>
      </div>
    </>
    )
  }
}
export default App