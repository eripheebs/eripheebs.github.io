describe('MainCtrl', function() {
  beforeEach(module('eriApp'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new;
    ctrl = $controller('MainCtrl', { $scope: scope });
  }));

  it('initialises with a hello world', function() {
    expect(scope.test).toEqual("Hello world!")
  });

  it('initialises with an array of templates', function() {
    expect(scope.templates.length).toBeGreaterThan(0);
  });

  it('changes the template', function() {
    scope.changeTemplate("welcome")
    expect(scope.template).toEqual({ name: 'welcome', url: 'https://eripheebs.github.io/app/partials/welcome.html'})
  });
});
