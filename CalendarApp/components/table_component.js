var React = require('react');
var Tr = require('./tr_component');

var Table = React.createClass({
  render: function() {

    var tr_list = [];

    tr_list = this.props.tableMas.map(function(row, index) {
      return (<Tr tdMas={row} key={index} />);
    });

    return (
      <table>
        <tbody>
          {tr_list}
        </tbody>
      </table>
    );
  }
});

module.exports = Table;
