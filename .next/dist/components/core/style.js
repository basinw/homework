'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexBox = exports.Table = exports.Tr = exports.Button = exports.Title = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _styledComponents2.default.span.withConfig({
  displayName: 'style__Title',
  componentId: 's7ywk51-0'
})(['font-family:\'PWScratchedFont\',sans-serif;text-align:center;font-size:2em;display:inline-block;margin-top:20px;margin-bottom:5px;']);

var FlexBox = _styledComponents2.default.div.withConfig({
  displayName: 'style__FlexBox',
  componentId: 's7ywk51-1'
})(['display:flex;justify-content:center;align-items:center;min-height:100vh;font-size:4em;']);

var Button = _styledComponents2.default.button.withConfig({
  displayName: 'style__Button',
  componentId: 's7ywk51-2'
})(['color:#fff;border-radius:5px;font-size:1.2em;height:2.5em;border:1px solid transparent;cursor:pointer;padding:5px 10px;@media screen and (max-width:768px){width:100% !important;margin:5px 0;}@media screen and (min-width:769px){width:calc(100% / 4);margin:0 5px;}', ';'], function (props) {
  return props.major === props.selectedMajor ? '\n    background-color: #00838f;\n    font-weight: bold;\n    &:hover {\n      background-color: #26C6DA;\n      box-shadow: 0px 0px 20px #888888;\n    }\n      ' : '\n      background: #455A64;\n      &:hover {\n        background: #E0E0E0;\n        border-color: #424242;\n        color: #000;\n      } \n      ';
});

var Tr = _styledComponents2.default.tr.withConfig({
  displayName: 'style__Tr',
  componentId: 's7ywk51-3'
})(['& th:nth-child(1){width:calc(150% / 2);}th:nth-child(2){width:calc(50%);}']);

var Table = _styledComponents2.default.table.withConfig({
  displayName: 'style__Table',
  componentId: 's7ywk51-4'
})(['color:#fff;box-shadow:0px 0px 20px #888888;background-color:rgba(33,37,41,0.7) !important;& tbody tr:hover{background-color:rgba(255,255,255,0.5) !important;cursor:pointer;}']);
exports.Title = Title;
exports.Button = Button;
exports.Tr = Tr;
exports.Table = Table;
exports.FlexBox = FlexBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvcmVcXHN0eWxlLmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImluamVjdEdsb2JhbCIsIlRpdGxlIiwic3BhbiIsIkZsZXhCb3giLCJkaXYiLCJCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsIm1ham9yIiwic2VsZWN0ZWRNYWpvciIsIlRyIiwidHIiLCJUYWJsZSIsInRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7Ozs7QUFFakIsSUFBTSxtQ0FBQSxBQUFlO2VBQWY7ZUFBQTtBQUFBLENBQVEsR0FBZDs7QUFTQSxJQUFNLHFDQUFBLEFBQWlCO2VBQWpCO2VBQUE7QUFBQSxDQUFVLEdBQWhCOztBQVFBLElBQU0sb0NBQUEsQUFBZ0I7ZUFBaEI7ZUFBQTtBQUFBLENBQVMsbVJBbUJYLGlCQUFBO1NBQ0EsTUFBQSxBQUFNLFVBQVUsTUFBaEIsQUFBc0Isc0xBRHRCO0FBbkJKLEFBQU07O0FBdUNOLElBQU0sZ0NBQUEsQUFBWTtlQUFaO2VBQUE7QUFBQSxDQUFLLEdBQVg7O0FBU0EsSUFBTSxtQ0FBQSxBQUFlO2VBQWY7ZUFBQTtBQUFBLENBQVEsR0FBZCxBQVNBO1FBQUEsQUFBUztRQUFULEFBQWdCO1FBQWhCLEFBQXdCO1FBQXhCLEFBQTRCO1FBQTVCLEFBQW1DIiwiZmlsZSI6InN0eWxlLmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2plY3QveXdjIn0=