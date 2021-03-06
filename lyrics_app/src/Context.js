import React, { Component, createContext } from "react";
import axios from "axios";

const Context = createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    lyrics: {},
    track: {},
    heading: "Top 10 Tracks"
  };

  componentDidMount() {
    axios
      .get(
        `https://corsanywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={[this.state, this.lyricsQry, this.trackQry]}>
        {this.props.children}
      </Context.Provider>
    );
  }
}


export const Consumer = Context.Consumer;
