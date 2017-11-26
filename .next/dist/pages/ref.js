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

var _reactFacebook = require('react-facebook');

var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

var _style = require('../components/core/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\project\\ywc\\pages\\ref.js?entry';

var RefContainer = function RefContainer(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.load ? _react2.default.createElement(_style.FlexBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'loading . . .') : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, !props.hasData ? _react2.default.createElement(_style.FlexBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'no data') : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_style.Background, { style: { minHeight: '100vh' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_style.Col, { className: 'col-12 text-center', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_style.Title2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'Congratulation!'), _react2.default.createElement(_style.Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, props.data.firstName, ' ', props.data.lastName, ' ', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, '\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E21\u0E20\u0E32\u0E29\u0E13\u0E4C\u0E17\u0E35\u0E21\xA0', _react2.default.createElement('span', { className: 'major', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, props.data.major)), _react2.default.createElement(_reactFacebook2.default, { appId: '1956888527661925', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_reactFacebook.Share, {
    href: 'http://bassup.tk:3001',
    quote: '\n                          "' + (props.data.firstName + ' ' + props.data.lastName) + '" \u0E44\u0E14\u0E49\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E21\u0E2F YWC \u0E01\u0E31\u0E1A\u0E40\u0E04\u0E49\u0E32\u0E14\u0E49\u0E27\u0E22\u0E41\u0E2B\u0E25\u0E30 \u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E21 ' + props.data.major + ' \u0E19\u0E30 :)\n                          ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(_style.ButtonShare, {
    type: 'button',
    className: 'btn mt-3 btn-primary',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement('i', { className: 'fa fa-facebook', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), ' Share'))))))))))));
};

exports.default = (0, _recompose.compose)((0, _recompose.withState)('data', 'setData', ''), (0, _recompose.withState)('hasData', 'setHasData', false), (0, _recompose.withState)('load', 'setLoad', true), (0, _recompose.lifecycle)({
  componentWillMount: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var refId, _ref2, data, index;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              refId = this.props.url.query.id;

              if (!(refId === null || refId === undefined)) {
                _context.next = 4;
                break;
              }

              _context.next = 10;
              break;

            case 4:
              _context.next = 6;
              return _axios2.default.get('/');

            case 6:
              _ref2 = _context.sent;
              data = _ref2.data;
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

            case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxyZWYuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJpbnN0YW5jZSIsImxpZmVjeWNsZSIsImNvbXBvc2UiLCJ3aXRoU3RhdGUiLCJGYWNlYm9va1Byb3ZpZGVyIiwiU2hhcmUiLCJGbGV4Qm94IiwiQmFja2dyb3VuZCIsIkNvbCIsIlRpdGxlMiIsIk5hbWUiLCJCdXR0b25TaGFyZSIsIkJ1dHRvbiIsIlJlZkNvbnRhaW5lciIsInByb3BzIiwibG9hZCIsImhhc0RhdGEiLCJtaW5IZWlnaHQiLCJkYXRhIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJtYWpvciIsImNvbXBvbmVudFdpbGxNb3VudCIsInJlZklkIiwidXJsIiwicXVlcnkiLCJpZCIsInVuZGVmaW5lZCIsImdldCIsImluZGV4IiwiZmluZEluZGV4IiwiZSIsImludGVydmlld1JlZiIsInRvTG93ZXJDYXNlIiwic2V0RGF0YSIsInNldExvYWQiLCJzZXRIYXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBVyxBQUFTOztBQUM3QixBQUFPLEFBQW9COzs7O0FBRTNCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQWUsQUFDVjs7Ozs7O0FBQ1AsSUFBTSxlQUFlLFNBQWYsQUFBZSxvQkFBQTt5QkFDbkIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxRQUNHLEFBQU0sdUJBQ0wsQUFBQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFERCxBQUNDLG1DQUVBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsR0FDSSxNQUFELEFBQU8sMEJBQ04sQUFBQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFERCxBQUNDLDZCQUVBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyxtQ0FBVyxPQUFPLEVBQUUsV0FBckIsQUFBbUIsQUFBYTtnQkFBaEM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsNEJBQUksV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0Esb0NBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRztBQURIO0FBQUEsV0FDRyxBQUFNLEtBRFQsQUFDYyxXQUFZLFdBQUEsQUFBTSxLQURoQyxBQUNxQyxVQUFVOztnQkFBQTtrQkFEL0MsQUFDK0MsQUFDN0M7QUFENkM7QUFBQSxzQkFDN0MsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRUUsNEdBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQXlCO0FBQXpCO1dBQXlCLEFBQU0sS0FKbkMsQUFFRSxBQUVFLEFBQW9DLEFBRXRDLHlCQUFBLEFBQUMseUNBQWlCLE9BQWxCLEFBQXdCO2dCQUF4QjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQztVQUFELEFBQ08sQUFDTDs4Q0FDQyxNQUFBLEFBQU0sS0FBTixBQUFXLFlBQVgsQUFDRCxNQUNBLE1BQUEsQUFBTSxLQUhOLEFBSUcsME5BQ0QsTUFBQSxBQUFNLEtBTFIsQUFLYSxRQVBmOztnQkFBQTtrQkFBQSxBQVdFO0FBWEY7QUFDRSxxQkFVQSxBQUFDO1VBQUQsQUFDTyxBQUNMO2VBRkYsQUFFWTs7Z0JBRlo7a0JBQUEsQUFJRTtBQUpGO0FBQ0UsMENBR0csV0FBSCxBQUFhO2dCQUFiO2tCQUpGLEFBSUU7QUFBQTtNQXRDVCxBQUNuQixBQUlJLEFBSUksQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBRUUsQUFNRSxBQUNFLEFBV0U7QUFsQzVCLEFBdURBOzswQ0FDRSwwQkFBQSxBQUFVLFFBQVYsQUFBa0IsV0FETCxBQUNiLEFBQTZCLEtBQzdCLDBCQUFBLEFBQVUsV0FBVixBQUFxQixjQUZSLEFBRWIsQUFBbUMsUUFDbkMsMEJBQUEsQUFBVSxRQUFWLEFBQWtCLFdBSEwsQUFHYixBQUE2QjtBQUNuQixrQ0FBQTsyR0FBQTs4QkFBQTs7b0VBQUE7a0JBQUE7MkNBQUE7aUJBRUY7QUFGRSxzQkFFTSxLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUZyQixBQUUyQjs7b0JBQzdCLFVBQUEsQUFBVSxRQUFRLFVBSGhCLEFBRzBCLFlBSDFCO2dDQUFBO0FBQUE7QUFBQTs7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7cUJBS2lCLGdCQUFBLEFBQVMsSUFMMUIsQUFLaUIsQUFBYTs7aUJBTDlCOytCQUtFO0FBTEYsMkJBQUEsQUFLRSxBQUNGO0FBTkEsMkJBTVEsQUFBSyxVQUNmLGFBQUE7dUJBQUssRUFBQSxBQUFFLGFBQUYsQUFBZSxrQkFBa0IsTUFBdEMsQUFBc0MsQUFBTTtBQVAxQyxBQU1RLEFBR1osZUFIWTs7a0JBR1IsUUFBUSxDQUFaLEFBQWEsR0FBRyxBQUNkO3FCQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBbkIsQUFBbUIsQUFBSyxBQUN4QjtxQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEFBQ25CO3FCQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsQUFDdkI7QUFKRCxxQkFJTyxBQUNMO0FBQ0E7cUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixBQUNwQjtBQWhCRzs7aUJBQUE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QUFBQTs7a0NBQUE7OEJBQUE7QUFBQTs7V0FBQTtBQUpHLEFBSWIsQUFBVTtBQUFBLEFBQ0YsQ0FEUixDQUphLEVBQWYsQUFBZSxBQXdCYiIsImZpbGUiOiJyZWYuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovcHJvamVjdC95d2MifQ==