angular.module('angular-carousel')

.directive('readMore', ['$window', function($window){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="read-more"><div ng-transclude></div><a href ng-click="toggleReadMore()" class="folded-read-more"></a></div>',
    link: function (scope, element, attrs) {
      
      var content = element.find('.read-more');
      var toggleReadMore = function () {
        if(content.hasClass('folded-read-more'))
          content.removeClass('folded-read-more').addClass('unfolded-read-more');
        else if(content.hasClass('folded-read-more'))  
          content.removeClass('unfolded-read-more').addClass('folded-read-more');
        return;
      };
      $scope.toggleReadMore = toggleReadMore;
      
      var init = function () {
        var contentHeight = content.outerHeight();
        if(contentHeight > 48) {
          content.addClass('folded-read-more');
          content.show();
        }
      };
      init();
      
    }
  };
}]);
