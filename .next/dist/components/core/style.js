'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonShare = exports.Title2 = exports.Name = exports.Col = exports.Background = exports.FlexBox = exports.Table = exports.Tr = exports.Button = exports.Title = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _styledComponents2.default.span.withConfig({
  displayName: 'style__Title',
  componentId: 's1tkb56t-0'
})(['font-family:\'PWScratchedFont\',sans-serif;text-align:center;font-size:2em;display:inline-block;margin-top:20px;margin-bottom:5px;']);

var FlexBox = _styledComponents2.default.div.withConfig({
  displayName: 'style__FlexBox',
  componentId: 's1tkb56t-1'
})(['display:flex;justify-content:center;align-items:center;min-height:100vh;font-size:4em;']);

var Button = _styledComponents2.default.button.withConfig({
  displayName: 'style__Button',
  componentId: 's1tkb56t-2'
})(['color:#fff;border-radius:5px;font-size:1.2em;height:2.5em;border:1px solid transparent;cursor:pointer;padding:5px 10px;@media screen and (max-width:768px){width:100% !important;margin:5px 0;}@media screen and (min-width:769px){width:calc(100% / 4);margin:0 5px;}', ';'], function (props) {
  return props.major === props.selectedMajor ? '\n    background-color: #00838f;\n    font-weight: bold;\n    &:hover {\n      background-color: #26C6DA;\n      box-shadow: 0px 0px 20px #888888;\n    }\n      ' : '\n      background: #455A64;\n      &:hover {\n        background: #E0E0E0;\n        border-color: #424242;\n        color: #000;\n      } \n      ';
});

var Tr = _styledComponents2.default.tr.withConfig({
  displayName: 'style__Tr',
  componentId: 's1tkb56t-3'
})(['& th:nth-child(1){width:calc(150% / 2);}th:nth-child(2){width:calc(50%);}']);

var Background = _styledComponents2.default.div.withConfig({
  displayName: 'style__Background',
  componentId: 's1tkb56t-4'
})(['background-image:url(\'/static/images/img1.png\');background-size:contain;']);

var Table = _styledComponents2.default.table.withConfig({
  displayName: 'style__Table',
  componentId: 's1tkb56t-5'
})(['color:#fff;box-shadow:0px 0px 20px #888888;background-color:rgba(33,37,41,0.7) !important;& tbody tr:hover{background-color:rgba(255,255,255,0.5) !important;cursor:pointer;}']);

var Col = _styledComponents2.default.div.withConfig({
  displayName: 'style__Col',
  componentId: 's1tkb56t-6'
})(['font-size:2em;display:flex;justify-content:center;align-items:center;min-height:70vh;']);

var Title2 = _styledComponents2.default.div.withConfig({
  displayName: 'style__Title2',
  componentId: 's1tkb56t-7'
})(['font-family:\'PWScratchedFont\',sans-serif;margin:20px 0 10px;']);

var Name = _styledComponents2.default.div.withConfig({
  displayName: 'style__Name',
  componentId: 's1tkb56t-8'
})(['box-shadow:0 0 20px #fff;padding:20px;background-color:rgba(0,0,0,0.6);& > div{fontsize:1em;& > .major{color:#05d7ea;}}']);

var ButtonShare = _styledComponents2.default.button.withConfig({
  displayName: 'style__ButtonShare',
  componentId: 's1tkb56t-9'
})(['background:rgba(4,220,255,0.6) !important;border-color:transparent !important;']);

exports.Title = Title;
exports.Button = Button;
exports.Tr = Tr;
exports.Table = Table;
exports.FlexBox = FlexBox;
exports.Background = Background;
exports.Col = Col;
exports.Name = Name;
exports.Title2 = Title2;
exports.ButtonShare = ButtonShare;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvcmVcXHN0eWxlLmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImluamVjdEdsb2JhbCIsIlRpdGxlIiwic3BhbiIsIkZsZXhCb3giLCJkaXYiLCJCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsIm1ham9yIiwic2VsZWN0ZWRNYWpvciIsIlRyIiwidHIiLCJCYWNrZ3JvdW5kIiwiVGFibGUiLCJ0YWJsZSIsIkNvbCIsIlRpdGxlMiIsIk5hbWUiLCJCdXR0b25TaGFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7Ozs7O0FBRWpCLElBQU0sbUNBQUEsQUFBZTtlQUFmO2VBQUE7QUFBQSxDQUFRLEdBQWQ7O0FBU0EsSUFBTSxxQ0FBQSxBQUFpQjtlQUFqQjtlQUFBO0FBQUEsQ0FBVSxHQUFoQjs7QUFRQSxJQUFNLG9DQUFBLEFBQWdCO2VBQWhCO2VBQUE7QUFBQSxDQUFTLG1SQW1CWCxpQkFBQTtTQUNBLE1BQUEsQUFBTSxVQUFVLE1BQWhCLEFBQXNCLHNMQUR0QjtBQW5CSixBQUFNOztBQXVDTixJQUFNLGdDQUFBLEFBQVk7ZUFBWjtlQUFBO0FBQUEsQ0FBSyxHQUFYOztBQVNBLElBQU0sd0NBQUEsQUFBb0I7ZUFBcEI7ZUFBQTtBQUFBLENBQWEsR0FBbkI7O0FBS0EsSUFBTSxtQ0FBQSxBQUFlO2VBQWY7ZUFBQTtBQUFBLENBQVEsR0FBZDs7QUFVQSxJQUFNLGlDQUFBLEFBQWE7ZUFBYjtlQUFBO0FBQUEsQ0FBTSxHQUFaOztBQVFBLElBQU0sb0NBQUEsQUFBZ0I7ZUFBaEI7ZUFBQTtBQUFBLENBQVMsR0FBZjs7QUFLQSxJQUFNLGtDQUFBLEFBQWM7ZUFBZDtlQUFBO0FBQUEsQ0FBTyxHQUFiOztBQVlBLElBQU0seUNBQUEsQUFBcUI7ZUFBckI7ZUFBQTtBQUFBLENBQWMsR0FBcEIsQUFLQTs7UUFBQSxBQUNFO1FBREYsQUFFRTtRQUZGLEFBR0U7UUFIRixBQUlFO1FBSkYsQUFLRTtRQUxGLEFBTUU7UUFORixBQU9FO1FBUEYsQUFRRTtRQVJGLEFBU0U7UUFURixBQVVFIiwiZmlsZSI6InN0eWxlLmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2plY3QveXdjIn0=