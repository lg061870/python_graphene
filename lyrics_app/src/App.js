// api
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// style
import "./App.css";

// components
import Navbar from "./components/layout/Navbar";
import Index from "./components/index";
import Lyrics from "./components/tracks/Lyrics";

// data
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="App container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
