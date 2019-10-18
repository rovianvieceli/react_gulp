import ReactDOM from 'react-dom';
import React from 'react';

import Title from './components/header/title';
import Navbar from './components/navbar/navbar';
import Card from './components/card/card';

const App = (
    <div className="root">
        <Navbar title="React Gulp" color="deep-purple darken-2" />
        <div className="container">
            <Title />
            <Card col='4' />
        </div>
    </div>
)

ReactDOM.render(App, document.getElementById('app'));
