import ReactDOM from 'react-dom';
import React from 'react';

import Title from './components/title/title';
import Navbar from './components/navbar/navbar';

const App = (
    <div className="root">
        <Navbar title="React Gulp" color="deep-purple darken-2" />
        <div className="container">
            <Title />
        </div>
    </div>
)

ReactDOM.render(App, document.getElementById('app'));