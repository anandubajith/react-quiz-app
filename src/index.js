import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

var questions = [
  {
    text: "hi there",
    options: ['one', 'two', 'three'],
    answer: 'one'
  },
  {
    text: "hi again",
    options: ['one', 'two', 'three'],
    answer: 'one'
  },
  {
    text: "one more thing",
    options: ['one', 'two', 'three'],
    answer: 'one'
  },
  {
    text: "lot of options",
    options: ['one', 'two', 'three', 'one', 'two', 'three'],
    answer: 'one'
  }
]

ReactDOM.render(
  <App questions={questions}/>,
  document.getElementById('root')
);
