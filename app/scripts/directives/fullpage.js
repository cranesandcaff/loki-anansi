angular.module('lokiAnansi').directive('bgFull', function () {
  var slideheight = $(window).height() - $('.globalHeader').outerHeight() + 'px';
  return {
    restrict:'AE',
    link: function (scope, element, attrs) {
              element.css({'min-height': slideheight});
        }
     };
});