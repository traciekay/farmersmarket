$(document).ready(function() {
  $("#AddFarmer").click(function(event){
    $(".newProduce").show();
  });
    $("#marketplace form").submit(function(event) {
      var farmInput= $("input#farmProduct").val();
      var priceInput= $("input#price").val();
      var addressInput= $("input#quantity").val();
      var dopInput = $("input#dop").val();


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
