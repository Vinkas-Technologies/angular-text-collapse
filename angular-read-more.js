angular.module('angular-read-more', [])

.directive('readMore', ['$window', function($window){
	return {
		restrict: 'AE',
		transclude: true,
		template: '<div class="read-more" ng-transclude></div><a class="read-link" href></a>',
		link: function (scope, element, attrs) {
			
			element.bind('click', 'a.read-link', function () {
				var c = $(this).find('.read-more');
				var l = $(this).find('.read-link');
				
				if(c.hasClass('folded-read-more')) {
					c.removeClass('folded-read-more').addClass('unfolded-read-more');
					l.html('read less');
				}
				else if(content.hasClass('unfolded-read-more')) {
					c.removeClass('unfolded-read-more').addClass('folded-read-more');
					l.html('read more');
				}
				return;
			});
			
			var content = element.find('.read-more');
			var link = element.find('.read-link');
			
			init = function () {
				var contentHeight = content.outerHeight();
				if(contentHeight >= 120) {
					content.addClass('folded-read-more');
					content.show();
					link.html('read more');
				}
			};
			init();
			
		}
	};
}]);
