var React = require('react');
var ReactDOM = require('react-dom');
var BlockComponent = require('./block_component');
var DateOperation = require('../model/dateOperation/dateOperation');

var __date = new DateOperation();

ReactDOM.render(<BlockComponent __date={__date} tableMas={__date.getDaysCurrMonth()} header={__date.getCurrentMonth()}/>, document.getElementById('content'));
