import React, { Component } from 'react';
import '../css/Result.css'

class ResultPageComponent extends Component {
  render() {
    return (
      <div className="Result">
        <h1> Results </h1>
        { this.props.points }
        from
        { this.props.total *10} points

      </div>
    );
  }

}

export default ResultPageComponent;
