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

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

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

      var _ref2, data, current_data;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('/');

            case 2:
              _ref2 = _context.sent;
              data = _ref2.data;
              current_data = data.filter(function (d) {
                return d.major === _this.props.major;
              });

              this.props.setAllData(data);
              current_data.sort(function (a, b) {
                return compare(a, b, 'interviewRef');
              });
              this.props.setListData(current_data);

            case 8:
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
      // console.log(key)
      var result = '';
      if (key.length === 0) {
        result = props.allData.filter(function (d) {
          return d.major === props.major;
        });
        // console.log('if')
      } else {
        // console.log(props.allData)
        result = props.allData.filter(function (d) {
          return d.firstName.indexOf(key) > -1 || d.interviewRef.indexOf(key) > -1 || d.lastName.indexOf(key) > -1;
        });
        // console.log('else')
      }
      // console.log(result)
      props.setListData(result);
    };
  },
  handleKeyDown: function handleKeyDown(props) {
    return function (e) {
      // console.log(e.key)
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
  },
  redirect: function redirect(props) {
    return function (e) {
      _index2.default.push('/ref/' + e);
    };
  }
}))(_main2.default);

exports.default = IndexCompose;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbXBvc2UuanMiXSwibmFtZXMiOlsiY29tcG9zZSIsIndpdGhTdGF0ZSIsIndpdGhIYW5kbGVycyIsImxpZmVjeWNsZSIsImluc3RhbmNlIiwiSW5kZXhDb250YWluZXIiLCJSb3V0ZXIiLCJjb21wYXJlIiwiYSIsImIiLCJjIiwiQSIsIkIiLCJJbmRleENvbXBvc2UiLCJjb21wb25lbnRXaWxsTW91bnQiLCJnZXQiLCJkYXRhIiwiY3VycmVudF9kYXRhIiwiZmlsdGVyIiwiZCIsIm1ham9yIiwicHJvcHMiLCJzZXRBbGxEYXRhIiwic29ydCIsInNldExpc3REYXRhIiwib25TZWxlY3QiLCJvbkNoYW5nZU1ham9yIiwicmVzdWx0IiwiYWxsRGF0YSIsImUiLCJzZXRNYWpvciIsImhhbmRsZVNlYXJjaCIsImtleSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJmaXJzdE5hbWUiLCJpbmRleE9mIiwiaW50ZXJ2aWV3UmVmIiwibGFzdE5hbWUiLCJoYW5kbGVLZXlEb3duIiwicnMiLCJyZWRpcmVjdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFTLEFBQVcsQUFBYzs7QUFDM0MsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTzs7Ozs7O0FBRVAsSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxHQUFNLEFBQzNCO01BQUksSUFBSSxFQUFSLEFBQVEsQUFBRTtNQUNSLElBQUksRUFETixBQUNNLEFBQUUsQUFDUjtNQUFJLElBQUosQUFBUSxHQUFHLE9BQU8sQ0FBUCxBQUFRLEFBQ25CO01BQUksSUFBSixBQUFRLEdBQUcsT0FBQSxBQUFPLEFBQ2xCO1NBQUEsQUFBTyxBQUNSO0FBTkQ7O0FBUUEsSUFBTSx1Q0FDSiwwQkFBQSxBQUFVLFVBQVYsQUFBb0IsV0FERCxBQUNuQixBQUErQixVQUMvQiwwQkFBQSxBQUFVLFdBQVYsQUFBcUIsWUFGRixBQUVuQixBQUFpQyxRQUNqQywwQkFBQSxBQUFVLFNBQVYsQUFBbUIsWUFIQSxBQUduQixBQUErQixZQUMvQiwwQkFBQSxBQUFVLFdBQVYsQUFBcUIsY0FKRixBQUluQixBQUFtQyxLQUNuQywwQkFBQSxBQUFVLFlBQVYsQUFBc0IsZUFMSCxBQUtuQixBQUFxQztBQUMzQixrQ0FBQTsyR0FBQTtrQkFBQTs7dUJBQUE7O29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUVlLGdCQUFBLEFBQVMsSUFGeEIsQUFFZSxBQUFhOztpQkFGNUI7K0JBRUE7QUFGQSwyQkFBQSxBQUVBLEFBQ0Y7QUFIRSxrQ0FHYSxBQUFLLE9BQU8sYUFBQTt1QkFBSyxFQUFBLEFBQUUsVUFBVSxNQUFBLEFBQUssTUFBdEIsQUFBNEI7QUFIckQsQUFHYSxBQUNuQixlQURtQjs7bUJBQ25CLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsQUFDdEI7MkJBQUEsQUFBYSxLQUFLLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjt1QkFBVSxRQUFBLEFBQVEsR0FBUixBQUFXLEdBQXJCLEFBQVUsQUFBYztBQUExQyxBQUNBO21CQUFBLEFBQUssTUFBTCxBQUFXLFlBTkwsQUFNTixBQUF1Qjs7aUJBTmpCO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQUE7O2tDQUFBOzhCQUFBO0FBQUE7O1dBQUE7QUFOUyxBQU1uQixBQUFVO0FBQUEsQUFDRixDQURSLENBTm1CO1lBZ0JQLHlCQUFBO1dBQVMsY0FBTSxBQUFFLENBQWpCO0FBREMsQUFFWDtpQkFBZSw4QkFBQTtXQUFTLGFBQUssQUFDM0I7VUFBSSxlQUFTLEFBQU0sUUFBTixBQUFjLE9BQU8sYUFBQTtlQUFLLE1BQU0sRUFBWCxBQUFhO0FBQS9DLEFBQWEsQUFDYixPQURhO2FBQ2IsQUFBTyxLQUFLLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjtlQUFVLFFBQUEsQUFBUSxHQUFSLEFBQVcsR0FBckIsQUFBVSxBQUFjO0FBQXBDLEFBQ0E7WUFBQSxBQUFNLFlBQU4sQUFBa0IsQUFDbEI7WUFBQSxBQUFNLFNBQU4sQUFBZSxBQUNoQjtBQUxjO0FBRkosQUFRWDtnQkFBYyw2QkFBQTtXQUFTLGFBQUssQUFDMUI7VUFBSSxNQUFNLEVBQUEsQUFBRSxPQUFaLEFBQW1CLEFBQ25CO1lBQU0sSUFBTixBQUFNLEFBQUksQUFDVjtBQUNBO1VBQUksU0FBSixBQUFhLEFBQ2I7VUFBSSxJQUFBLEFBQUksV0FBUixBQUFtQixHQUFHLEFBQ3BCO3VCQUFTLEFBQU0sUUFBTixBQUFjLE9BQU8sYUFBQTtpQkFBSyxFQUFBLEFBQUUsVUFBVSxNQUFqQixBQUF1QjtBQUFyRCxBQUFTLEFBQ1QsU0FEUztBQUVWO0FBSEQsYUFHTyxBQUNMO0FBQ0E7dUJBQVMsQUFBTSxRQUFOLEFBQWMsT0FDckIsYUFBQTtpQkFDRSxFQUFBLEFBQUUsVUFBRixBQUFZLFFBQVosQUFBb0IsT0FBTyxDQUEzQixBQUE0QixLQUM1QixFQUFBLEFBQUUsYUFBRixBQUFlLFFBQWYsQUFBdUIsT0FBTyxDQUQ5QixBQUMrQixLQUMvQixFQUFBLEFBQUUsU0FBRixBQUFXLFFBQVgsQUFBbUIsT0FBTyxDQUg1QixBQUc2QjtBQUovQixBQUFTLEFBTVQsU0FOUztBQU9WO0FBQ0Q7QUFDQTtZQUFBLEFBQU0sWUFBTixBQUFrQixBQUNuQjtBQXBCYTtBQVJILEFBNkJYO2lCQUFlLDhCQUFBO1dBQVMsYUFBSyxBQUMzQjtBQUNBO1VBQUksRUFBQSxBQUFFLFFBQU4sQUFBYyxVQUFVLEFBQ3RCO1VBQUEsQUFBRSxPQUFGLEFBQVMsUUFBVCxBQUFpQixBQUNqQjtZQUFJLFdBQUssQUFBTSxRQUFOLEFBQWMsT0FBTyxnQkFBQTtpQkFBUSxLQUFBLEFBQUssVUFBVSxNQUF2QixBQUE2QjtBQUEzRCxBQUFTLEFBQ1QsU0FEUztXQUNULEFBQUcsS0FBSyxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7aUJBQVUsUUFBQSxBQUFRLEdBQVIsQUFBVyxHQUFyQixBQUFVLEFBQWM7QUFBaEMsQUFDQTtjQUFBLEFBQU0sWUFBTixBQUFrQixBQUNuQjtBQUNGO0FBUmM7QUE3QkosQUFzQ1g7WUFBVSx5QkFBQTtXQUFTLGFBQUssQUFDdEI7c0JBQUEsQUFBTyxlQUFQLEFBQW9CLEFBQ3JCO0FBRlM7QUFyRGQsQUFBcUIsQUFlbkIsQUFBYSxBQTBDYixBQUVGO0FBNUNlLEFBQ1gsQ0FERjs7a0JBNENGLEFBQWUiLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9qZWN0L3l3YyJ9