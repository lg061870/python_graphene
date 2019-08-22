import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar } from "material-ui";

export default class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <h1>Thank you for your participation</h1>
          <p> you will get an email with further instructions! </p>
        </>
      </MuiThemeProvider>
    );
  }
}
