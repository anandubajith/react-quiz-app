var React = require('react');

var ResultPage = React.createClass({
	render: function() {
		var total_score = this.props.total * 10;
		var score = this.props.score;
		var message = "";
		if ( score > 16 ) {
			message = "Congratulations! "
		} else if ( score > 12 ) {
			message = "motivationg message"
		} else {
			message = "Better luck next time. :( "
		}
		
		return (
			<div>
				<h1 className="mui--text-display4">
		          { message }
		        </h1>
		        <h1 className="mui--text-display3">
		          Your score was { this.props.score } out of { total_score }.
		        </h1>
			</div>
		);
	}
});

module.exports = ResultPage;