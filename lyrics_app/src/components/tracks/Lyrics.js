import React, { Component } from "react";
import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://corsanywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));

    axios
      .get(
        `https://corsanywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ lyrics: res.data.message.body.lyrics });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;

    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return (
        <div className="sweet-loading">
          <BeatLoader
            css={override}
            sizeUnit={"px"}
            size={15}
            color={"#123abc"}
            loading={this.state.loading}
          />
        </div>
      );
    } else {
      return (
        <>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Album ID</strong>:{" "}
                {track.primary_genres.music_genre_list.length > 0
                  ? track.primary_genres.music_genre_list[0].music_genre
                      .music_genre_name
                  : "Missing Musical Genre"}
              </li>
              <li className="list-group-item">
                <strong>Explicit Lyrics</strong>:{" "}
                {track.explicit === 0 ? "No" : "Yes"}
              </li>
              <li className="list-group-item">
                <strong>Explicit Words</strong>:{" "}
                {track.explicit === 0 ? "No" : "Yes"}
              </li>
              <li className="list-group-item">
                <strong>Release Date</strong>: {track.first_release_date}
              </li>
            </ul>
          </div>
        </>
      );
    }
  }
}
