movieReview.factory('ReviewFactory', function ReviewFactory() {
  var factory = {};
  factory.reviews = [
    { movieName: "Fight Club", id: 1, movieReviewTitle: "Chuck Palahniuk psychological thriller", movieReviewContent: "Fight club is awesome"},
    { movieName: "Seven", id: 2, movieReviewTitle: "This is the Seven review.", movieReviewContent: "Creepy movie"},
    { movieName: "Memento", id: 3, movieReviewTitle: "Best movie ever made.", movieReviewContent: "Memento is a mind-bending movie."},
    { movieName: "12 Monkies", id: 4, movieReviewTitle: "Surprisingly good Bruce Willis movie", movieReviewContent: "Interesting flick with crazy dudes everywhere."},
    { movieName: "", id: 5, movieReviewTitle: "", movieReviewContent: ""}
  ];

  factory.addReview = function() {
    factory.reviews.push({ name: factory.getName, id: factory.reviews.length + 1, movieReviewTitle: factory.getTitle, movieRviewContent: factory.getContent });
  };

  return factory;
});
