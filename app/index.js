var React = require('react');
var ReactDOM = require('react-dom');

var ResultPage = require('./components/resultPage');
var QuizComponent = require('./components/quizContainer');
var AppBar = require('./components/appBar');

var questionsUrl = '/questions.json';

var App = React.createClass({
	getInitialState: function() {
		return {
			score: 0,
			current: 0,
			questions: []
		};
	},
	componentDidMount: function() {
		var self = this;
		
		var xhr = new XMLHttpRequest();
		xhr.open('get', this.props.questionsUrl, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					self.setState(
						{ questions: JSON.parse(xhr.responseText) }
					);
				} else {
					console.log("Error ");
				}
			}
		};
		xhr.send();

	},
	progress: function(score) {
		this.setState({
			score: this.state.score + score,
			current: this.state.current + 1
		});
	},
	render: function() {
		var question = this.state.questions[this.state.current];
		if ( this.state.questions.length > this.state.current ) {
			return (
				<div>
					<AppBar current={this.state.current} total={ this.state.questions.length }/>
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
							total={ this.state.questions.length } />
	    			<div className="container">
						<ResultPage score={this.state.score}
									total={this.state.questions.length} />
					</div>
				</div>
			);
		}
	}
});

ReactDOM.render(
	<App questionsUrl={questionsUrl} />,
	document.getElementById('app')
);