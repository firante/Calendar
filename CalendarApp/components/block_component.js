var React = require('react');
var ReactDOM = require('react-dom');
var Table = require('./table_component');
var Dispatcher = require('../Dispatcher/Dispatcher');
var MicroEvent = require('../Dispatcher/microevent');

var AppDispatcher = new Dispatcher();

var ListStore = {
  actualView: {listView: null, current: null},

  getView: function() {
    return this.actualView;
  }
};

MicroEvent.mixin(ListStore);

AppDispatcher.register(function(payload) {
  switch (payload.eventName) {
    case 'monthView':
      ListStore.actualView.listView = payload.monthList.list;
      ListStore.actualView.current = payload.monthList.currYear;
      ListStore.trigger('change');
      break;

    case 'yearView':
      ListStore.actualView.listView = payload.yearList.list;
      ListStore.actualView.current = payload.yearList.none;
      ListStore.trigger('change');
      break;

    default:
      break;
  }
});

var BlockComponent = React.createClass({

  componentDidMount: function () {
    ListStore.bind('change', this.viewChange);
  },

  componentWillUnmount: function () {
    ListStore.unbind('change', this.viewChange);
  },

  viewChange: function () {
    ReactDOM.render(<BlockComponent __date={this.props.__date} tableMas={ListStore.getView().listView} header={ListStore.getView().current}/>, document.getElementById('content'));
  },

  getNextHeader: function() {
    if(isNaN(+this.props.header)) {
      AppDispatcher.dispatch ({
        eventName: 'monthView',
        monthList: {list: this.props.__date.getMonth(), currYear: this.props.__date.getCurrentYear()}
      });
    } else {
      AppDispatcher.dispatch ({
        eventName: 'yearView',
        yearList: {list: this.props.__date.getYears(), none: "false"}
      });
    }
  },

  render: function () {
    var header;
    if(this.props.header != 'false') {
      header =  <div>
                      <div className='headerChange'> {'<'} </div>
                      <div
                        id = 'headerView'
                        onClick = {this.getNextHeader}>
                          {this.props.header}
                      </div>
                      <div className='headerChange'> {'>'} </div>
                    </div>;
    } else {
      header = '';
    }

    return (
      <div className='mainBlock'>
        <div>
          <input
            className='date'
            type='text' />
        </div>

        {header}
        <br />

        <div>
          <Table tableMas={this.props.tableMas} />
        </div>
        <div className='footer'>
          <input type='button' value='today' />
        </div>
      </div>
    );
  }
});

module.exports = BlockComponent;
