import React, { Component } from 'react';
import '../css/Question.css'

class Question extends Component {
  handleClick(e) {
    console.log(e.target.dataset.value);
    if ( e.target.dataset.value === this.props.answer ) {
      this.props.progress(10);
    } else {
      this.props.progress(0);
    }
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      diff: 0
    }
  }
  renderOptions(optionsArray) {
    return optionsArray.map(
      (option, id) => <button onClick={ this.handleClick }
                              key={ id } data-value={ option }>
                              { option }
                      </button>
    );
  }

  render() {
    return (
      <div className="Question">
        <h1>{ this.props.text }</h1>
        <div className="Options">
          { this.renderOptions( this.props.options ) }
        </div>
      </div>
    );
  }

}

export default Question;
