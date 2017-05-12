$(document).ready(function() {
    $("#AddFarmer").click(function(event){
      $(".newProduce").show();
    });

    $("#marketplace form").submit(function(event) {
      var farmInput= $("input#farmProduct").val();
      var priceInput= $("input#price").val();
      var quantityInput= $("input#quantity").val();
      var imageInput = $("input#image").val();


      $(".name").text(nameInput);
      $(".gender").text(genderInput);
      $(".email").text(emailInput);
      $(".address").text(addressInput);
      $(".purchase").text(dopInput);
      $(".fruits").text(fruitsInput);



      event.preventDefault();
    });
  });
