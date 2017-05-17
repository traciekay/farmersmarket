$(document).ready(function() {
    $("#AddFarmer").click(function(event){
      $(".newProduce").show();
    });

    $("#marketplace").click(function(event) {

      var farmInput= $("input#farmProduct").val();
      var priceInput= $("input#price").val();
      var quantityInput= $("input#quantity").val();
      var imageInput = $("#image").val().replace(/.*\\(.*)/, '$1')

      var new_row = "<tr><td>" + farmInput + "</td><td>" + priceInput + "</td><td>" + quantityInput +
      "</td><td><img src='img/" + imageInput + "'></td></tr>";

      $("table tbody").append(new_row);
      $(".newProduce").hide();
      return false;

    });
  });
