var React = require('react');

var QuizComponent = React.createClass({
	render: function() {
		var options = this.props.options.map(function( val, index ) {
			return (
				<button className="mui-btn mui-btn--large mui-btn--danger"
						key={index}
						onClick={ this.handleSubmit }
				>
					{ val }
				</button>
			);
		}, this);

		return (
			<div>
				<h1 className="mui--text-display3"> { this.props.question } </h1>
				<div className="options" style={{ "margin" : "2em 0" }}>
					{ options }
				</div>
			</div>
		);
	},

	handleSubmit: function(e) {
		if ( e.currentTarget.textContent === this.props.correct ) {
			this.props.progress(10); // ten points
		} else {
			this.props.progress(0); // no score
		}
	}
});

module.exports = QuizComponent;