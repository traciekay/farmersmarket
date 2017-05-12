$(document).ready(function() {
    $("#AddFarmer").click(function(event){
      $(".newProduce").show();
    });

    $("#marketplace form").click(function(event) {
      var farmInput= $("input#farmProduct").val();
      var priceInput= $("input#price").val();
      var quantityInput= $("input#quantity").val();
      var imageInput = $("input#image").val();

      var new_row = "<tr><td>" + farmInput + "</td><td>" + priceInput + "</td><td>" + quantityInput +
      "</td><td>" + imageInput + "</td></tr>";
    $("table tbody").append(new_row);
    return false;



      event.preventDefault();
    });
  });
