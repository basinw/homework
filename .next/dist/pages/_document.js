'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\project\\ywc\\pages\\_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var a = 0;
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'YWC'), this.props.styleTags, _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/bootstrap.min.css', async: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/style.css', async: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/animate.css', async: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/font-awesome/css/font-awesome.min.css',
        async: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleTags: styleTags });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwiTXlEb2N1bWVudCIsImEiLCJwcm9wcyIsInN0eWxlVGFncyIsInJlbmRlclBhZ2UiLCJzaGVldCIsInBhZ2UiLCJjb2xsZWN0U3R5bGVzIiwiZ2V0U3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFTOzs7Ozs7O0ksQUFDWTs7Ozs7Ozs7Ozs7NkJBVVYsQUFDUDtVQUFNLElBQU4sQUFBVSxBQUNWOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNDLGFBQUEsQUFBSyxNQUZSLEFBRWMsQUFDWjtjQUFBLEFBQ08sQUFDTDtpQkFGRixBQUVVOztvQkFGVjtzQkFIRixBQUdFLEFBSUE7QUFKQTtBQUNFLGtEQUdJLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLGlDQUFnQyxPQUE1RDtvQkFBQTtzQkFQRixBQU9FLEFBQ0E7QUFEQTtrREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qix5QkFBd0IsT0FBcEQ7b0JBQUE7c0JBUkYsQUFRRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsMkJBQTBCLE9BQXREO29CQUFBO3NCQVRGLEFBU0UsQUFDQTtBQURBOzthQUNBLEFBQ00sQUFDSjtjQUZGLEFBRU8sQUFDTDtlQUhGOztvQkFBQTtzQkFYSixBQUNFLEFBVUUsQUFNRjtBQU5FO0FBQ0UsMkJBS0osY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFwQk4sQUFDRSxBQWlCRSxBQUVFLEFBSVA7QUFKTztBQUFBOzs7OzBDQS9CK0I7VUFBZCxBQUFjLGtCQUFkLEFBQWMsQUFDckM7O1VBQU0sUUFBTixBQUFjLEFBQUksQUFDbEI7VUFBTSxrQkFBa0IsZUFBQTtlQUFPLGlCQUFBO3VCQUM3QixBQUFNLDRDQUFjLEFBQUMsZ0NBQUQsQUFBUzs7d0JBQVQ7MEJBRFMsQUFDN0IsQUFBb0I7QUFBQTtBQUFBLFlBQUEsQ0FBcEI7QUFEc0I7QUFBeEIsQUFBYSxBQUdiLE9BSGE7VUFHUCxZQUFZLE1BQWxCLEFBQWtCLEFBQU0sQUFDeEI7d0NBQUEsQUFBWSxRQUFNLFdBQWxCLEFBQ0Q7Ozs7O0FBUnFDLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9wcm9qZWN0L3l3YyJ9