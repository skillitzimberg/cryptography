function cryptoController(input) {
  console.log("called controller");
  return input;
}


$(function() {
  $("#crypto-form").submit(function(event) {
    event.preventDefault();

    var input = $("#crypto-input").val();
    var output = cryptoController(input);
    $("#crypto-output").text(output);
  });
});
