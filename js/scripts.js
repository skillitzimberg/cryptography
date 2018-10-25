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

function mapStringToGrid(processedString, squareSize) {
  var gridRows = [];
  for (var index = 0; index < processedString.length; index += squareSize) {
    gridRows.push(processedString.slice(index, index + squareSize));
  }
  return gridRows;
}

function extractCrypto(gridRows, squareSize) {
  var encryptedStringNoSpaces = "";
  for (var col = 0; col < squareSize; col++) {
    for (var row = 0; row < gridRows.length; row++) {
      encryptedStringNoSpaces += gridRows[row].charAt(col);

    }
  }
  return encryptedStringNoSpaces;
}

function addSpacesToString(encryptedStringNoSpaces, spaceEvery) {
  var stringChunks = [];
  for (var index = 0; index < encryptedStringNoSpaces.length; index += spaceEvery) {
    stringChunks.push(encryptedStringNoSpaces.slice(index, index + spaceEvery));
  }
  return stringChunks.join(" ");
}

function cryptoController(input) {
  var processedString = preprocessInput(input);
  var squareSize = findSquare(processedString.length);
  var gridRows = mapStringToGrid(processedString, squareSize);
  var cryptoString = extractCrypto(gridRows, squareSize);
  var result = addSpacesToString(cryptoString, 5);

  return result;
};


$(function() {
  $("#crypto-form").submit(function(event) {
    event.preventDefault();

    var input = $("#crypto-input").val();
    var output = cryptoController(input);
    $("#crypto-output").text(output);
  });
});
