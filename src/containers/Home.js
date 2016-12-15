import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import HomeView from '../components/Home/HomeView';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeView />
      </Provider>
    );
  }
}
