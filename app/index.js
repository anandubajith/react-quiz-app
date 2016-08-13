var React = require('react');
var ReactDOM = require('react-dom');

var ResultPage = require('./components/resultPage');
var QuizComponent = require('./components/quizContainer');
var AppBar = require('./components/appBar');
var questions = require('./questions.js')


var App = React.createClass({
	getInitialState: function() {
		return {
			score: 0,
			current: 0
		};
	},
	progress: function(score) {
		this.setState({ score: this.state.score + score, current: this.state.current + 1 })
	},
	render: function() {
		var question = this.props.questions[this.state.current];
		if ( this.props.questions.length > this.state.current ) {
			return (
				<div>
					<AppBar current={this.state.current} total={ this.props.questions.length }/>
	 				<div className="container">
						<QuizComponent question={ question.question}
									options={ question.options }
									correct={ question.correct }
									progress={ this.progress }
									/>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<AppBar current={this.state.current - 1}
							total={ this.props.questions.length } />
	    			<div className="container">
						<ResultPage score={this.state.score}
									total={this.props.questions.length} />
					</div>
				</div>
			);
		}
	}
});

ReactDOM.render(<App questions={questions}/>, document.getElementById('app'));