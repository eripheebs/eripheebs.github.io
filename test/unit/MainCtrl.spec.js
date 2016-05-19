describe('MainCtrl', function() {
  beforeEach(module('eriApp'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new;
    ctrl = $controller('MainCtrl', {$scope:scope});
  }));

  it('initialises with a hello world', function() {
    expect(scope.test).toEqual("Hello world!")
  });
});
