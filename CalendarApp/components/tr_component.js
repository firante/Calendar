var React = require('react');
var Td = require('./td_component');

var Tr = React.createClass({

  render: function() {
    var td_list = [];
    td_list = this.props.tdMas.map(function(value, index) {
      return (<Td comp={value} key={index} />);
    });

    return (
      <tr>
        {td_list}
      </tr>
    );
  }
});

module.exports = Tr;
