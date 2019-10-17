import ReactDOM from 'react-dom';
import React from 'react';

import Title from './components/title/index';
import Navbar from './components/navbar/index';

const App = (
    <div className="root">
        <Navbar title="React Gulp" color="deep-purple darken-2" />
        <div className="container">
            <Title />
        </div>
    </div>
)

ReactDOM.render(App, document.getElementById('app'));