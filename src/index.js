import React, { Component } from "react";
import { Provider } from "react-redux";
import { StatusBar, Platform, StyleSheet, Text, View } from "react-native";

import Intl from "intl";
import "intl/locale-data/jsonp/pt-BR";

import Routes from "./routes";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Routes />
      </Provider>
    );
  }
}

export default App;
