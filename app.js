var movieReview = angular.module('movieReview', ['ui.router']);

movieReview.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "",

    views:{
      'header':{
        templateUrl: "partials/header.html",
      },
      'home':{
        templateUrl: "partials/home.html"
      },
    }
	});

	$stateProvider.state('reviews',{
		url:"/reviews",

		views:{
			'header':{
				templateUrl: "partials/header.html",
			},
			'reviewList':{
				templateUrl: "partials/reviewList.html",
				controller: "ReviewCtrl",
			},
			'theReview':{
				templateUrl: "partials/theReview.html",
				controller: "ReviewCtrl",
			},
		}
	});

  $stateProvider.state('reviews.review', {
    url: "/:reviewId",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: "partials/reviews.review.html",
        controller: 'ReviewCtrl'
      },
    }
  });
});
