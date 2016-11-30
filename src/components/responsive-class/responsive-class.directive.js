(function () {
    'use strict';

    angular
        .module('klmSlider')
        .directive('klmResponsiveClass', klmResponsiveClassDirective);

    klmResponsiveClassDirective.$inject = ['$window', 'mediaQueryService'];

    /**
     * @param {Object} klmResponsiveClass - An object with keys that refer to CSS breakpoints, the values are classes
     * that are exclusively added to the corresponding screen size.
     *
     * @example
     * <div klm-responsive-class="{sm: 'u-color--black', lg: 'u-color--blue'}"></div>
     */
    function klmResponsiveClassDirective ($window, mediaQueryService) {
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
                let allClasses = angular.copy(BASE_CLASSES);
                const responsiveClasses = scope.klmResponsiveClass[mediaQueryService.getBreakpoint()];

                if (angular.isString(responsiveClasses)) {
                    allClasses += ' ' + responsiveClasses;
                }

                element.attr('class', allClasses);
            }
        }
    }
})();
