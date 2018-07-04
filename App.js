/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStore} from 'redux'
import{Provider} from 'react-redux'
import Main from './component/Main'
import Store from './component/redux/Store'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <Provider store={Store}>
     <Main/>
     </Provider>
    );
  }
}

//tich hop ung dung react

