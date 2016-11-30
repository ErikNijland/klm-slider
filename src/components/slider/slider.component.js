(function () {
    'use strict';

    angular
        .module('klmSlider')
        .component('klmSlider', {
            bindings: {
                slides: '<'
            },
            templateUrl: 'components/slider/slider.html',
            transclude: true,
            controller: KlmSliderController,
            controllerAs: 'vm'
        });

    function KlmSliderController () {
        let vm = this;
        const NUMBER_OF_SLIDES = vm.slides.length;

        vm.activeSlide = 0;

        vm.isSlideActive = function (slideIndex) {
            return vm.activeSlide === slideIndex;
        };

        vm.nextSlide = function () {
            vm.activeSlide = (vm.activeSlide + 1) % NUMBER_OF_SLIDES;
        };

        vm.previousSlide = function () {
            vm.activeSlide = (vm.activeSlide || NUMBER_OF_SLIDES) - 1;
        };

        vm.goToSlide = function (index) {
            vm.activeSlide = index;
        };
    }
})();
