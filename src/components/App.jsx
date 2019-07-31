import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js'
import YOUTUBE_API_KEY from '../config/youtube.js'


class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      nowPlaying: exampleVideoData[0],
      playOnClick: exampleVideoData,
      query: ''
    };
    this.onClick = this.onListEntryClick.bind(this);
    this.onChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount(
  //   var cb = data => this.setState({playOnClick: data.items})
  //   searchYouTube({max:5, query:'dog', key:YOUTUBE_API_KEY}, cb);
  // );
  handleChange(e){
    this.setState({
      query: e.target.value
    });
  }
  handleSubmit(){
    var obj = {
      max: 5,
      query: this.state.query,
      key: YOUTUBE_API_KEY
    };
    var func = (data) => {
      this.setState({
        playOnClick: data
      })
    };
    searchYouTube(obj, func);
  }
  onListEntryClick(e) {
    this.setState({
      nowPlaying: e
    });
  }
  render(){
    return(
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search change={this.onChange} submit={this.handleSubmit}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em></em><VideoPlayer video={this.state.nowPlaying} /></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em></em> <VideoList videos={this.state.playOnClick} func={this.onClick}/></h5></div>
        </div>
      </div>
    </div>
    )
  }

};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
