import React from "react";
import { Consumer } from "../../Context";
import Track from "../tracks/Track";

const Tracks = () => {
  return (
    <Consumer>
      {
        value => 
        {
          const [state] = value;

          return (
            <>
              <h3>{state.heading}</h3>
              <div className="row">
                {state.track_list.map(item => (
                  <Track key={item.track.track_id} track={item.track} />
                ))}
              </div>
            </>
          )
        }
      }
    </Consumer>
  );
};

export default Tracks;
