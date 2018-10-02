import React, {Component} from 'react';
import SongDetail from '../components/SongDetail.js';

class SongContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
          top20Songs: []
        };
      }

    render(){
        const allSongs = this.state.top20Songs.map((eachSong, index)=>{
            return(
                    <SongDetail artist={eachSong["im:artist"].label} name={eachSong["im:name"].label} image={eachSong["im:image"][0].label}key={index}/>
                )}
            )
        return (
            <div>
            <h3>Top 20 songs</h3>
            {allSongs}</div>
        )
        }


  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({top20Songs: data.feed.entry}))
  }
}

export default SongContainer;