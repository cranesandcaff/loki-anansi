angular.module('lokiAnansi').directive('bgFull', function () {
  var slideheight = $(window).height() - $('.globalHeader').outerHeight() + 'px';
  console.log($(window).height());
  console.log($('.globalHeader').outerHeight())
  console.log(slideheight);
  return {
    restrict:'AE',
    link: function (scope, element, attrs) {
              element.css({'min-height': slideheight});
        }
     };
});