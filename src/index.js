import React from 'react';
import { render } from 'react-dom';
import document from 'global/document';
import Home from './containers/Home';

const elem = document.getElementById('react-web-app');

render(<Home />, elem);
