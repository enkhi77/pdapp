'use strict';

describe('Directive: pdtabs', function () {

  // load the directive's module and view
  beforeEach(module('pdappApp'));
  beforeEach(module('app/pdtabs/pdtabs.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pdtabs></pdtabs>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the pdtabs directive');
  }));
});