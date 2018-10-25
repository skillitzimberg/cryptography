function preprocessInput(inputString) {
  var lowerCased = inputString.toLowerCase();
  var spaceAndPunctuationRegex = /[^a-z0-9]/ig;
  var processed =  lowerCased.replace(spaceAndPunctuationRegex, "");

  return processed;
};

function findSquare(stringLength) {
  var squareRoot = Math.sqrt(stringLength);

  squareRoot = Math.ceil(squareRoot);

  return squareRoot;
};

function cryptoController(input) {
  var processedString = preprocessInput(input);
  var squareSize = findSquare(processedString.length);

  console.log(processedString);
  return processedString;
};


$(function() {
  $("#crypto-form").submit(function(event) {
    event.preventDefault();

    var input = $("#crypto-input").val();
    var output = cryptoController(input);
    $("#crypto-output").text(output);
  });
});
