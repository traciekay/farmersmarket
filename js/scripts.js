$(document).ready(function() {
    $("#marketplace form").submit(function(event) {
      var nameInput= $("input#name").val();
      var genderInput = $("#gender").val();
      var emailInput= $("input#email").val();
      var addressInput= $("#address").val();
      var dopInput = $("input#dop").val();
      var fruitsInput = $("input:radio[name=fruits]:checked").val();


      $(".name").text(nameInput);
      $(".gender").text(genderInput);
      $(".email").text(emailInput);
      $(".address").text(addressInput);
      $(".purchase").text(dopInput);
      $(".fruits").text(fruitsInput);



      $(".receipt").show();

      event.preventDefault();
    });
  });
