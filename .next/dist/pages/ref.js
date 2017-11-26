'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _axios = require('../libs/axios');

var _axios2 = _interopRequireDefault(_axios);

var _recompose = require('recompose');

var _style = require('../components/core/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\project\\ywc\\pages\\ref.js?entry';

var RefContainer = function RefContainer(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.load ? _react2.default.createElement(_style.FlexBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'loading . . .') : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, !props.hasData ? _react2.default.createElement(_style.FlexBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'no data') : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('div', { className: 'col-12', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, props.data.firstName, ' ', props.data.lastName, props.data.interviewRef, props.data.major))))));
};

exports.default = (0, _recompose.compose)((0, _recompose.withState)('data', 'setData', ''), (0, _recompose.withState)('hasData', 'setHasData', false), (0, _recompose.withState)('load', 'setLoad', true), (0, _recompose.lifecycle)({
  componentWillMount: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var refId, data, index;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('>' + this.props.data + '<');
              refId = this.props.url.query.id;

              if (!(refId === null || refId === undefined)) {
                _context.next = 5;
                break;
              }

              _context.next = 11;
              break;

            case 5:
              _context.next = 7;
              return _axios2.default.get('/').then(function (res) {
                return res.data;
              });

            case 7:
              data = _context.sent;

              console.log(data);
              index = data.findIndex(function (e) {
                return e.interviewRef.toLowerCase() === refId.toLowerCase();
              });

              if (index > -1) {
                this.props.setData(data[index]);
                this.props.setLoad(false);
                this.props.setHasData(true);
              } else {
                //   this.props.setData(data[index])
                this.props.setLoad(false);
              }

            case 11:
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
}))(RefContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxyZWYuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJpbnN0YW5jZSIsImxpZmVjeWNsZSIsImNvbXBvc2UiLCJ3aXRoU3RhdGUiLCJGbGV4Qm94IiwiUmVmQ29udGFpbmVyIiwicHJvcHMiLCJsb2FkIiwiaGFzRGF0YSIsImRhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImludGVydmlld1JlZiIsIm1ham9yIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsImxvZyIsInJlZklkIiwidXJsIiwicXVlcnkiLCJpZCIsInVuZGVmaW5lZCIsImdldCIsInRoZW4iLCJyZXMiLCJpbmRleCIsImZpbmRJbmRleCIsImUiLCJ0b0xvd2VyQ2FzZSIsInNldERhdGEiLCJzZXRMb2FkIiwic2V0SGFzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQVcsQUFBUzs7QUFFN0IsQUFBUyxBQUFlOzs7Ozs7QUFDeEIsSUFBTSxlQUFlLFNBQWYsQUFBZSxvQkFBQTt5QkFDbkIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxRQUNHLEFBQU0sdUJBQ0wsQUFBQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFERCxBQUNDLG1DQUVBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsR0FDSSxNQUFELEFBQU8sMEJBQ04sQUFBQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFERCxBQUNDLDZCQUVBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNHO0FBREg7V0FDRyxBQUFNLEtBRFQsQUFDYyxXQUFZLFdBQUEsQUFBTSxLQURoQyxBQUNxQyxBQUNsQyxnQkFBQSxBQUFNLEtBRlQsQUFFYyxBQUNYLG9CQUFBLEFBQU0sS0FmSixBQUNuQixBQUlJLEFBSUksQUFDRSxBQUNFLEFBQ0UsQUFHYztBQWY5QixBQTBCQTs7MENBQ0UsMEJBQUEsQUFBVSxRQUFWLEFBQWtCLFdBREwsQUFDYixBQUE2QixLQUM3QiwwQkFBQSxBQUFVLFdBQVYsQUFBcUIsY0FGUixBQUViLEFBQW1DLFFBQ25DLDBCQUFBLEFBQVUsUUFBVixBQUFrQixXQUhMLEFBR2IsQUFBNkI7QUFDbkIsa0NBQUE7MkdBQUE7dUJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBRU47c0JBQUEsQUFBUSxVQUFRLEtBQUEsQUFBSyxNQUFyQixBQUEyQixPQUN2QjtBQUhFLHNCQUdNLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BSHJCLEFBRzJCOztvQkFDN0IsVUFBQSxBQUFVLFFBQVEsVUFKaEIsQUFJMEIsWUFKMUI7Z0NBQUE7QUFBQTtBQUFBOzs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTtxQ0FNYSxBQUFTLElBQVQsQUFBYSxLQUFiLEFBQWtCLEtBQUssZUFBQTt1QkFBTyxJQUFQLEFBQVc7QUFOL0MsQUFNYSxlQUFBOztpQkFBYjtBQU5BLDhCQU9KOztzQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNSO0FBUkEsMkJBUVEsQUFBSyxVQUNmLGFBQUE7dUJBQUssRUFBQSxBQUFFLGFBQUYsQUFBZSxrQkFBa0IsTUFBdEMsQUFBc0MsQUFBTTtBQVQxQyxBQVFRLEFBR1osZUFIWTs7a0JBR1IsUUFBUSxDQUFaLEFBQWEsR0FBRyxBQUNkO3FCQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBbkIsQUFBbUIsQUFBSyxBQUN4QjtxQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEFBQ25CO3FCQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsQUFDdkI7QUFKRCxxQkFJTyxBQUNMO0FBQ0E7cUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixBQUNwQjtBQWxCRzs7aUJBQUE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QUFBQTs7a0NBQUE7OEJBQUE7QUFBQTs7V0FBQTtBQUpHLEFBSWIsQUFBVTtBQUFBLEFBQ0YsQ0FEUixDQUphLEVBQWYsQUFBZSxBQTBCYiIsImZpbGUiOiJyZWYuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovcHJvamVjdC95d2MifQ==