var React = require('react');

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

module.exports = AppBar;