var DateOperation  = function () {

  var currDate = {date: 0, month: 0, year: 0};

  var __date = {};

  var daysInMonth = [
                      [{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null}],
                      [{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null}],
                      [{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null}],
                      [{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null}],
                      [{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null}],
                      [{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null},{value: 0, active: null}]
                    ];

  var month = [
                [{value: 'Jan', active: 'td_month'}, {value: 'Feb', active: 'td_month'}, {value: 'Mar', active: 'td_month'}, {value: 'Apr', active: 'td_month'}],
                [{value: 'May', active: 'td_month'}, {value: 'Jun', active: 'td_month'}, {value: 'Jul', active: 'td_month'}, {value: 'Aug', active: 'td_month'}],
                [{value: 'Sep', active: 'td_month'}, {value: 'Oct', active: 'td_month'}, {value: 'Nov', active: 'td_month'}, {value: 'Dec', active: 'td_month'}]
              ];

  var years = [
                [{value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}],
                [{value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}],
                [{value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}],
                [{value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}],
                [{value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}, {value: 0, active: 'td_year'}]
              ];

  var getDaysCurrMonth = function () {
    var date;
    if(currDate.year !== 0) {
      date = new Date(currDate.year, currDate.month-1, currDate.date);
    } else {
      date = new Date();
      setCurrDate(date.getDate(), date.getMonth(), date.getFullYear())
    }

    date = new Date(+date.getFullYear(), +date.getMonth(), 1);
    if(+date.getDay() === 1) {
      date = new Date(+date.getFullYear(), +date.getMonth()-1, +date.getDate()-7);
      for(var i = 0; i <= 5; i += 1) {
        for(var j = 0; j <= 6; j += 1) {
          daysInMonth[i][j].value = +date.getDate();
          daysInMonth[i][j].active = (currDate.month-1 === (+date.getMonth())) ? "thisMonth" : "otherMonth";
          date = new Date(+date.getFullYear(), +date.getMonth()-1, +date.getDate()+1);
        }
      }
    } else {
      date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()-((date.getDay() !== 0) ? date.getDay()-1 : 6) );
      for(var i = 0; i <= 5; i += 1) {
        for(var j = 0; j <= 6; j += 1) {
          daysInMonth[i][j].value = +date.getDate();
          daysInMonth[i][j].active = (currDate.month-1 === (+date.getMonth())) ? "thisMonth" : "otherMonth";
          date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()+1);

        }
      }
    }
    return daysInMonth;
  };

  var getMonth = function() {
    return month;
  };

  var getYears = function() {
    var dat = currDate.year-12;
    for(var i = 0; i < 5; i++) {
      for(var j = 0; j < 5; j++) {
        years[i][j].value = dat;
        dat++;
      }
    }
    return years;
  };

  var getCurrentDay = function() {
    return currDate.date;
  };

  var getCurrentMonth = function() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];
    return monthNames[currDate.month-1];
  };

  var getCurrentYear = function() {
    return currDate.year;
  };

  var setCurrDate = function (date, month, year) {
    currDate.date = date;
    currDate.month = parseInt(month, 10) + 1;
    currDate.year = year;
  };

  __date.getDaysCurrMonth = getDaysCurrMonth;
  __date.setCurrDate = setCurrDate;
  __date.getMonth = getMonth;
  __date.getYears = getYears;
  __date.getCurrentDay = getCurrentDay;
  __date.getCurrentMonth = getCurrentMonth;
  __date.getCurrentYear = getCurrentYear;

  return __date;
};

module.exports = DateOperation;
