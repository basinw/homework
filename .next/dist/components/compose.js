'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _recompose = require('recompose');

var _axios = require('../libs/axios');

var _axios2 = _interopRequireDefault(_axios);

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compare = function compare(a, b, c) {
  var A = a[c],
      B = b[c];
  if (A < B) return -1;
  if (A > B) return 1;
  return 0;
};

var IndexCompose = (0, _recompose.compose)((0, _recompose.withState)('sortBy', 'setSort', 'major'), (0, _recompose.withState)('orderBy', 'setOrder', 'asc'), (0, _recompose.withState)('major', 'setMajor', 'content'), (0, _recompose.withState)('allData', 'setAllData', []), (0, _recompose.withState)('listData', 'setListData', []), (0, _recompose.lifecycle)({
  componentWillMount: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this = this;

      var ywc_data, current_data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('/').then(function (res) {
                return res.data;
              });

            case 2:
              ywc_data = _context.sent;
              current_data = ywc_data.filter(function (d) {
                return d.major === _this.props.major;
              });

              this.props.setAllData(ywc_data);
              current_data.sort(function (a, b) {
                return compare(a, b, 'interviewRef');
              });
              this.props.setListData(current_data);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function componentWillMount() {
      return _ref.apply(this, arguments);
    }

    return componentWillMount;
  }()
}), (0, _recompose.withHandlers)({
  onSelect: function onSelect(props) {
    return function (id) {};
  },
  onChangeMajor: function onChangeMajor(props) {
    return function (e) {
      var result = props.allData.filter(function (d) {
        return e === d.major;
      });
      result.sort(function (a, b) {
        return compare(a, b, 'interviewRef');
      });
      props.setListData(result);
      props.setMajor(e);
    };
  },
  handleSearch: function handleSearch(props) {
    return function (e) {
      var key = e.target.value;
      key = key.toUpperCase();
      console.log(key);
      var result = '';
      if (key.length === 0) {
        result = props.allData.filter(function (d) {
          return d.major === props.major;
        });
        console.log('if');
      } else {
        console.log(props.allData);
        result = props.allData.filter(function (d) {
          return d.firstName.indexOf(key) > -1 || d.interviewRef.indexOf(key) > -1 || d.lastName.indexOf(key) > -1;
        });
        console.log('else');
      }
      console.log(result);
      props.setListData(result);
    };
  },
  handleKeyDown: function handleKeyDown(props) {
    return function (e) {
      console.log(e.key);
      if (e.key === 'Escape') {
        e.target.value = '';
        var rs = props.allData.filter(function (data) {
          return data.major === props.major;
        });
        rs.sort(function (a, b) {
          return compare(a, b, 'interviewRef');
        });
        props.setListData(rs);
      }
    };
  }
}))(_main2.default);

exports.default = IndexCompose;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbXBvc2UuanMiXSwibmFtZXMiOlsiY29tcG9zZSIsIndpdGhTdGF0ZSIsIndpdGhIYW5kbGVycyIsImxpZmVjeWNsZSIsImluc3RhbmNlIiwiSW5kZXhDb250YWluZXIiLCJjb21wYXJlIiwiYSIsImIiLCJjIiwiQSIsIkIiLCJJbmRleENvbXBvc2UiLCJjb21wb25lbnRXaWxsTW91bnQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInl3Y19kYXRhIiwiY3VycmVudF9kYXRhIiwiZmlsdGVyIiwiZCIsIm1ham9yIiwicHJvcHMiLCJzZXRBbGxEYXRhIiwic29ydCIsInNldExpc3REYXRhIiwib25TZWxlY3QiLCJvbkNoYW5nZU1ham9yIiwicmVzdWx0IiwiYWxsRGF0YSIsImUiLCJzZXRNYWpvciIsImhhbmRsZVNlYXJjaCIsImtleSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZmlyc3ROYW1lIiwiaW5kZXhPZiIsImludGVydmlld1JlZiIsImxhc3ROYW1lIiwiaGFuZGxlS2V5RG93biIsInJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBUyxBQUFXLEFBQWM7O0FBQzNDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQW9COzs7Ozs7QUFFM0IsSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxHQUFNLEFBQzNCO01BQUksSUFBSSxFQUFSLEFBQVEsQUFBRTtNQUNSLElBQUksRUFETixBQUNNLEFBQUUsQUFDUjtNQUFJLElBQUosQUFBUSxHQUFHLE9BQU8sQ0FBUCxBQUFRLEFBQ25CO01BQUksSUFBSixBQUFRLEdBQUcsT0FBQSxBQUFPLEFBQ2xCO1NBQUEsQUFBTyxBQUNSO0FBTkQ7O0FBUUEsSUFBTSx1Q0FDSiwwQkFBQSxBQUFVLFVBQVYsQUFBb0IsV0FERCxBQUNuQixBQUErQixVQUMvQiwwQkFBQSxBQUFVLFdBQVYsQUFBcUIsWUFGRixBQUVuQixBQUFpQyxRQUNqQywwQkFBQSxBQUFVLFNBQVYsQUFBbUIsWUFIQSxBQUduQixBQUErQixZQUMvQiwwQkFBQSxBQUFVLFdBQVYsQUFBcUIsY0FKRixBQUluQixBQUFtQyxLQUNuQywwQkFBQSxBQUFVLFlBQVYsQUFBc0IsZUFMSCxBQUtuQixBQUFxQztBQUMzQixrQ0FBQTsyR0FBQTtrQkFBQTs7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUNBRWUsQUFBUyxJQUFULEFBQWEsS0FBYixBQUFrQixLQUFLLGVBQUE7dUJBQU8sSUFBUCxBQUFXO0FBRmpELEFBRWUsZUFBQTs7aUJBQWpCO0FBRkUsa0NBR0Y7QUFIRSxzQ0FHYSxBQUFTLE9BQU8sYUFBQTt1QkFBSyxFQUFBLEFBQUUsVUFBVSxNQUFBLEFBQUssTUFBdEIsQUFBNEI7QUFIekQsQUFHYSxBQUNuQixlQURtQjs7bUJBQ25CLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsQUFDdEI7MkJBQUEsQUFBYSxLQUFLLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjt1QkFBVSxRQUFBLEFBQVEsR0FBUixBQUFXLEdBQXJCLEFBQVUsQUFBYztBQUExQyxBQUNBO21CQUFBLEFBQUssTUFBTCxBQUFXLFlBTkwsQUFNTixBQUF1Qjs7aUJBTmpCO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQUE7O2tDQUFBOzhCQUFBO0FBQUE7O1dBQUE7QUFOUyxBQU1uQixBQUFVO0FBQUEsQUFDRixDQURSLENBTm1CO1lBZ0JQLHlCQUFBO1dBQVMsY0FBTSxBQUFFLENBQWpCO0FBREMsQUFFWDtpQkFBZSw4QkFBQTtXQUFTLGFBQUssQUFDM0I7VUFBSSxlQUFTLEFBQU0sUUFBTixBQUFjLE9BQU8sYUFBQTtlQUFLLE1BQU0sRUFBWCxBQUFhO0FBQS9DLEFBQWEsQUFDYixPQURhO2FBQ2IsQUFBTyxLQUFLLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjtlQUFVLFFBQUEsQUFBUSxHQUFSLEFBQVcsR0FBckIsQUFBVSxBQUFjO0FBQXBDLEFBQ0E7WUFBQSxBQUFNLFlBQU4sQUFBa0IsQUFDbEI7WUFBQSxBQUFNLFNBQU4sQUFBZSxBQUNoQjtBQUxjO0FBRkosQUFRWDtnQkFBYyw2QkFBQTtXQUFTLGFBQUssQUFDMUI7VUFBSSxNQUFNLEVBQUEsQUFBRSxPQUFaLEFBQW1CLEFBQ25CO1lBQU0sSUFBTixBQUFNLEFBQUksQUFDVjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7VUFBSSxTQUFKLEFBQWEsQUFDYjtVQUFJLElBQUEsQUFBSSxXQUFSLEFBQW1CLEdBQUcsQUFDcEI7dUJBQVMsQUFBTSxRQUFOLEFBQWMsT0FBTyxhQUFBO2lCQUFLLEVBQUEsQUFBRSxVQUFVLE1BQWpCLEFBQXVCO0FBQXJELEFBQVMsQUFDVCxTQURTO2dCQUNULEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFIRCxhQUdPLEFBQ0w7Z0JBQUEsQUFBUSxJQUFJLE1BQVosQUFBa0IsQUFDbEI7dUJBQVMsQUFBTSxRQUFOLEFBQWMsT0FDckIsYUFBQTtpQkFDRSxFQUFBLEFBQUUsVUFBRixBQUFZLFFBQVosQUFBb0IsT0FBTyxDQUEzQixBQUE0QixLQUM1QixFQUFBLEFBQUUsYUFBRixBQUFlLFFBQWYsQUFBdUIsT0FBTyxDQUQ5QixBQUMrQixLQUMvQixFQUFBLEFBQUUsU0FBRixBQUFXLFFBQVgsQUFBbUIsT0FBTyxDQUg1QixBQUc2QjtBQUovQixBQUFTLEFBTVQsU0FOUztnQkFNVCxBQUFRLElBQVIsQUFBWSxBQUNiO0FBQ0Q7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1lBQUEsQUFBTSxZQUFOLEFBQWtCLEFBQ25CO0FBcEJhO0FBUkgsQUE2Qlg7aUJBQWUsOEJBQUE7V0FBUyxhQUFLLEFBQzNCO2NBQUEsQUFBUSxJQUFJLEVBQVosQUFBYyxBQUNkO1VBQUksRUFBQSxBQUFFLFFBQU4sQUFBYyxVQUFVLEFBQ3RCO1VBQUEsQUFBRSxPQUFGLEFBQVMsUUFBVCxBQUFpQixBQUNqQjtZQUFJLFdBQUssQUFBTSxRQUFOLEFBQWMsT0FBTyxnQkFBQTtpQkFBUSxLQUFBLEFBQUssVUFBVSxNQUF2QixBQUE2QjtBQUEzRCxBQUFTLEFBQ1QsU0FEUztXQUNULEFBQUcsS0FBSyxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7aUJBQVUsUUFBQSxBQUFRLEdBQVIsQUFBVyxHQUFyQixBQUFVLEFBQWM7QUFBaEMsQUFDQTtjQUFBLEFBQU0sWUFBTixBQUFrQixBQUNuQjtBQUNGO0FBUmM7QUE1Q25CLEFBQXFCLEFBZW5CLEFBQWEsQUF1Q2IsQUFFRjtBQXpDZSxBQUNYLENBREY7O2tCQXlDRixBQUFlIiwiZmlsZSI6ImNvbXBvc2UuanMiLCJzb3VyY2VSb290IjoiRDovcHJvamVjdC95d2MifQ==