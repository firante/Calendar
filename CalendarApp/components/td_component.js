var React = require('react');

var Td = React.createClass({
  render: function() {
    return (
      <td
        className={this.props.comp.active}>

        {this.props.comp.value}

      </td>
    );
  }
});

module.exports = Td;
