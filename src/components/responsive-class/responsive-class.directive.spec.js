describe('The klm-responsive-class directive', function () {
    let $compile,
        $rootScope,
        $window,
        mockedMediaQuery;

    beforeEach(function () {
        angular.mock.module(
            'klmSlider',
            {
                mediaQueryService: {
                    getBreakpoint: function () {
                        return mockedMediaQuery;
                    }
                }
            }
        );

        angular.mock.inject(function (_$compile_, _$rootScope_, _$window_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $window = _$window_;
        });

        mockedMediaQuery = 'sm';
    });

    function getDirective (classes, originalClass) {
        let directive,
            element,
            scope;

        element = document.createElement('div');
        element.setAttribute('klm-responsive-class', 'classes');

        if (angular.isString(originalClass)) {
            element.setAttribute('class', originalClass);
        }

        scope = $rootScope.$new();
        scope.classes = classes;

        directive = $compile(element)(scope);
        scope.$apply();

        return directive;
    }

    it('sets breakpoint specific classes on initialization', function () {
        let directive,
            classes;

        classes = {
            sm: 'u-mb--1',
            lg: 'u-mb--2'
        };

        mockedMediaQuery = 'sm';
        directive = getDirective(classes);
        expect(directive.attr('class')).toContain('u-mb--1');
        expect(directive.attr('class')).not.toContain('u-mb--2');

        mockedMediaQuery = 'lg';
        directive = getDirective(classes);
        expect(directive.attr('class')).toContain('u-mb--2');
        expect(directive.attr('class')).not.toContain('u-mb--1');
    });

    it('changes breakpoint specific classes when the viewport changes', function () {
        let directive,
            classes;

        classes = {
            sm: 'u-mb--1',
            lg: 'u-mb--2'
        };

        mockedMediaQuery = 'sm';
        directive = getDirective(classes);
        expect(directive.attr('class')).toContain('u-mb--1');
        expect(directive.attr('class')).not.toContain('u-mb--2');

        // Now change the viewport
        mockedMediaQuery = 'lg';
        $window.dispatchEvent(new Event('resize'));

        expect(directive.attr('class')).toContain('u-mb--2');
        expect(directive.attr('class')).not.toContain('u-mb--1');
    });

    it('doesn\'t break when a specific breakpoint has no responsive classes', function () {
        let directive,
            classes;

        classes = {
            sm: 'u-mb--1'
        };
        mockedMediaQuery = 'lg';
        directive = getDirective(classes, 'u-color--red');

        expect(directive.attr('class')).toContain('u-color--red');
        expect(directive.attr('class')).not.toContain('u-mb--1');
    });

    it('leaves regular classes in place', function () {
        let directive,
            classes;

        classes = {
            sm: 'u-mb--1',
            lg: 'u-mb--2'
        };
        mockedMediaQuery = 'sm';
        directive = getDirective(classes, 'u-color--red');
        expect(directive.attr('class')).toContain('u-color--red');

        // Switch to another breakpoint
        mockedMediaQuery = 'lg';
        $window.dispatchEvent(new Event('resize'));

        expect(directive.attr('class')).toContain('u-color--red');
    });
});
