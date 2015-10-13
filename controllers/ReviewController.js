movieReview.controller('ReviewCtrl', function ReviewCtrl($scope, $stateParams, ReviewFactory) {

  $scope.factory = ReviewFactory;
  $scope.reviews = ReviewFactory.reviews;

});
