eriApp.controller('MainCtrl', ['$scope', function($scope){
  $scope.title = 'ERIKA PHEBY';

  var initialTemplate = { name: 'home', url: 'https://eripheebs.github.io/app/partials/home.html'};
  var portTemplate = { name: 'portfolio', url: 'https://eripheebs.github.io/app/partials/portfolio.html'}

  $scope.templates =
    [ initialTemplate,
    portTemplate,
    { name: 'blog', url: 'https://eripheebs.github.io/app/partials/blog.html'},
    { name: 'cv', url: 'https://eripheebs.github.io/app/partials/cv.html'} ];

  $scope.template = initialTemplate;

  $scope.changeTemplate = function(templateName){
    $scope.template = _findUrl(templateName);
  }

  _findUrl = function(templateName){
    var searchResult = $.grep($scope.templates, function(template){ return template.name == templateName; });
    return searchResult[0];
  }

  $scope.onHome = function(){
    return $scope.template == initialTemplate;
  }

}]);
