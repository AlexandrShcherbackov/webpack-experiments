import Post from '@/Post';
import data from '@assets/data.json';
import WebpackLogo from '@assets/webpack.jpg';
import '@styles/index.css';

const post = new Post('Webpack post title', WebpackLogo);

console.log(post);
console.log(data);