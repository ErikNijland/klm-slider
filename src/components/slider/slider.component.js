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


    }
})();
