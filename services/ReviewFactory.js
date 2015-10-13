movieReview.factory('ReviewFactory', function ReviewFactory() {
  var factory = {};
  factory.reviews = [
    { movieName: "Fight Club", id: 1, movieReviewTitle: "This if the Fight Club review.", movieReviewContent: ""},
    { movieName: "Seven", id: 2, movieReviewTitle: "This is the Seven review.", movieReviewContent: ""},
    { movieName: "", id: 3, movieReviewTitle: "", movieReviewContent: ""},
    { movieName: "", id: 4, movieReviewTitle: "", movieReviewContent: ""},
    { movieName: "", id: 5, movieReviewTitle: "", movieReviewContent: ""}
  ];

  factory.addReview = function() {
    factory.reviews.push({ name: factory.getName, id: factory.reviews.length + 1, movieReviewTitle: factory.getTitle, movieRviewContent: factory.getContent });
  };

  return factory;
});
