import React, { Component } from 'react';
import './css/App.css';
import Question from './components/questionComponent.js'
import ResultPage from './components/resultpageComponent.js'

class App extends Component {
  progress(score) {
    this.setState({
      points: this.state.points + score,
      current: this.state.current +1
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      points: 0
    }
    this.progress = this.progress.bind(this);
  }

  render() {
    var component = <ResultPage points={ this.state.points }
                                total={ this.state.current }/>

    if ( this.state.current < this.props.questions.length ) {
      var q = this.props.questions[this.state.current];
      component =
        <Question text={ q.text }
                  answer={ q.answer }
                  options={ q.options }
                  progress={ this.progress }
        />;
    }

    return (
      <div className="container">{ component }</div>
    );
  }
}

export default App;
