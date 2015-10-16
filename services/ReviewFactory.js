movieReview.factory('ReviewFactory', function ReviewFactory() {
  var factory = {};
  factory.reviews = [
    { movieName: "Fight Club", id: 1, movieReviewTitle: "Chuck Palahniuk psychological thriller", movieReviewContent: ""},
    { movieName: "Seven", id: 2, movieReviewTitle: "This is the Seven review.", movieReviewContent: ""},
    { movieName: "Memento", id: 3, movieReviewTitle: "Best movie ever made.", movieReviewContent: ""},
    { movieName: "12 Monkies", id: 4, movieReviewTitle: "Surprisingly good Bruce Willis movie", movieReviewContent: ""},
    { movieName: "", id: 5, movieReviewTitle: "", movieReviewContent: ""}
  ];

  factory.addReview = function() {
    factory.reviews.push({ name: factory.getName, id: factory.reviews.length + 1, movieReviewTitle: factory.getTitle, movieRviewContent: factory.getContent });
  };

  return factory;
});
