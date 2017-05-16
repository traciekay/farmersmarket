$(document).ready(function() {
    $("#AddFarmer").click(function(event){
      $(".newProduce").show();
    });

    $("#marketplace").click(function(event) {

      var farmInput= $("input#farmProduct").val();
      var priceInput= $("input#price").val();
      var quantityInput= $("input#quantity").val();
      var imageInput = $("#image").val();
      console.log(farmInput);
      console.log(priceInput);
      console.log(quantityInput);
      var new_row = "<tr><td>" + farmInput + "</td><td>" + priceInput + "</td><td>" + quantityInput +
      "</td><td>" + imageInput + "</td></tr>";
      console.log(new_row);
      $("table tbody").append(new_row);
      return false;
      // $("#myModal").hide();
      // $('#myModal').dialog("close");

      event.preventDefault();
      $("#myModal").hide();
    });
  });
