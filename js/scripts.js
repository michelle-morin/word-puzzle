// front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();

    var sentArray = sentence.split("");

    for (var index = 0; index <= sentArray.length-1; index++) {
      if (sentArray[index] === "a" || sentArray[index] === "e" ||sentArray[index] === "i" || sentArray[index] === "o" || sentArray[index] === "u" || sentArray[index] === "A" || sentArray[index] === "E" ||sentArray[index] === "I" || sentArray[index] === "O" || sentArray[index] === "U") {
        sentArray[index] = "-";
      }
    } 

    var puzzle = sentArray.join("");

    $("#output").html(puzzle).show();
  });
});