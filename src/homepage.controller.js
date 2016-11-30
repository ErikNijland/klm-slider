(function () {
    'use strict';

    angular
        .module('klmSlider')
        .controller('HomepageController', HomepageController);

    function HomepageController () {
        let vm = this;

        vm.slides = [
            {
                src: 'assets/dest1.png',
                alt: ''
            }, {
                src: 'assets/dest2.png',
                alt: ''
            }, {
                src: 'assets/dest3.png',
                alt: ''
            }, {
                src: 'assets/dest4.png',
                alt: ''
            }
        ];
    }
})();
