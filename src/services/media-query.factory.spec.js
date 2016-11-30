describe('The mediaQueryService factory', function () {
    let mediaQueryService,
        $document;

    beforeEach(function () {
        angular.mock.module('klmSlider');

        angular.mock.inject(function (_mediaQueryService_, _$document_) {
            mediaQueryService = _mediaQueryService_;
            $document = _$document_;
        });
    });

    function setBreakpoint (breakpoint) {
        let stylesheet = document.createElement('style');

        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('type', 'text/css');
        stylesheet.innerText = 'body::before { content: "' + breakpoint + '"; }';

        $document[0].head.appendChild(stylesheet);
    }

    it('returns the active breakpoint\'s name based on CSS content', function () {
        setBreakpoint('sm');

        expect(mediaQueryService.getBreakpoint()).toBe('sm');
        // Switch to another breakpoint
        setBreakpoint('lg');
        expect(mediaQueryService.getBreakpoint()).toBe('lg');
    });
});
