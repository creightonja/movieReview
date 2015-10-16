movieReview.controller('ReviewCtrl', function ReviewCtrl($scope, $stateParams, ReviewFactory) {

  $scope.factory = ReviewFactory;
  $scope.reviews = ReviewFactory.reviews;
  $scope.theReview;

  $scope.setReview = function(movieReviewContent) {
    $scope.theReview = movieReviewContent;
    console.log(movieReviewContent);
  }

});
