eriApp.controller('MainCtrl', ['$scope', function($scope){
  $scope.test = 'Hello world!';

  $scope.templates =
   [ { name: 'welcome', url: 'https://eripheebs.github.io/app/partials/welcome.html'} ];

  $scope.template = $scope.templates[0];

  $scope.changeTemplate = function(templateName){
    $scope.template = _findUrl(templateName);
  }

  _findUrl = function(templateName){
    var searchResult = $.grep($scope.templates, function(template){ return template.name == templateName; });
    return searchResult[0];
  }

}]);
