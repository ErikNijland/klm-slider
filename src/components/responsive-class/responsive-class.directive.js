(function () {
    'use strict';

    angular
        .module('klmSlider')
        .directive('klmResponsiveClass', klmResponsiveClassDirective);

    klmResponsiveClassDirective.$inject = ['$window'];

    function klmResponsiveClassDirective ($window) {
        return {
            restrict: 'A',
            scope: {
                klmResponsiveClass: '<'
            },
            link: linkFunction
        };

        function linkFunction (scope, element) {
            const BASE_CLASSES = element.attr('class');

            updateClass();
            $window.addEventListener('resize', updateClass);

            function updateClass () {
                let allClasses = angular.copy(BASE_CLASSES),
                    responsiveClasses = scope.klmResponsiveClass[getBreakpoint()];

                if (angular.isString(responsiveClasses)) {
                    allClasses += ' ' + responsiveClasses;
                }

                element.attr('class', allClasses);
            }

            function getBreakpoint () {
                return $window
                    .getComputedStyle($window.document.querySelector('body'), ':before')
                    .getPropertyValue('content').replace(/"/g, '');
            }
        }
    }
})();
