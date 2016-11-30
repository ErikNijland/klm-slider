(function () {
    'use strict';

    angular
        .module('klmSlider')
        .controller('HomepageController', HomepageController);

    function HomepageController () {
        let vm = this;

        vm.slides = [
            {
                src: 'assets/home1.jpg',
                alt: ''
            }, {
                src: 'assets/home2.jpg',
                alt: ''
            }, {
                src: 'assets/home3.jpg',
                alt: ''
            }, {
                src: 'assets/home4.jpg',
                alt: ''
            }, {
                src: 'assets/home5.jpg',
                alt: ''
            }
        ];
    }
})();
