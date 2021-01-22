import Post from '@/Post';
import data from '@assets/data.json';
import WebpackLogo from '@assets/webpack.jpg';
import React from 'react';
import { render } from 'react-dom';
import '@styles/index.css';

const post = new Post('Webpack post title', WebpackLogo);

console.log(post);
console.log(data);

class Util {
    static id = Date.now()
}

console.log('id: ', Util.id);

const App = () => (
    <div className="container">
        <h1>React</h1>
    </div>
);

render(
    <App />,
    document.getElementById('app'),  
);