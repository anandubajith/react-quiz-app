var React = require('react');
var ReactDOM = require('react-dom');

var ResultPage = require('./components/resultPage');
var QuizComponent = require('./components/quizContainer');
var questions = require('./questions.js')


var AppBar = React.createClass({
	render: function() {
		return (
			<div className="mui-appbar">
	        <div className="mui-container-fluid">
	        <table width="100%">
	        	<tbody>
		          <tr style={ {"verticalAlign" : "middle" }}>
		            <td className="mui--appbar-height mui--text-display2">Quiz App</td>
		            
		            <td className="mui--appbar-height" style={ {textAlign: 'right'} }>
		            Question { this.props.current + 1} out of { this.props.total }
		            </td>
		          </tr>
	          </tbody>
	        </table>
	        </div>
	      </div>
		);
	}
});




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