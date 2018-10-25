function preprocessInput(inputString) {
  var lowerCased = inputString.toLowerCase();
  var spaceAndPunctuationRegex = /[^a-z0-9]/ig;
  var processed =  lowerCased.replace(spaceAndPunctuationRegex, "");
  
  return processed;
};

function cryptoController(input) {
  var processedString = preprocessInput(input);

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
