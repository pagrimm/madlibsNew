$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    // const person1Input = $("input#person1").val();
    // const person2Input = $("input#person2").val();
    // const animalInput= $("input#animal").val();
    // const exclamationInput = $("input#exclamation").val();
    // const verbInput = $("input#verb").val();
    // const nounInput = $("input#noun").val();

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    let inputs = [];
    $("input").each(function(){
      inputs.push($(this).val());
    });
    let position = 1;
    inputs.forEach(function(element) {
      $("span.input" + position).text(element);
      position += 1
    });
    
    $("#story").show();

  });
});



