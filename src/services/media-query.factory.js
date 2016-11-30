(function () {
    'use strict';

    angular
        .module('klmSlider')
        .factory('mediaQueryService', mediaQueryService);

    mediaQueryService.$inject = ['$window'];

    function mediaQueryService ($window) {
        return {
            getBreakpoint: getBreakpoint
        };

        function getBreakpoint () {
            return $window
                .getComputedStyle($window.document.querySelector('body'), ':before')
                .getPropertyValue('content').replace(/"/g, '');
        }
    }
})();
