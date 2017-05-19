$(document).ready(function() {
    $("#AddFarmer").click(function(event){
      $(".newProduce").show();
    });
    //Displays farmers details
    $(".farmerName").text(users[i]);
    $(".farmerContact").text(uPnone[i]);
    $(".farmerLocation").text(uLocation[i]);

    //populates the table
    $("#marketplace").click(function(event) {

      var farmInput= $("input#farmProduct").val();
      var priceInput= $("input#price").val();
      var quantityInput= $("input#quantity").val();
      var imageInput = $("#image").val().replace(/.*\\(.*)/, '$1')

      var new_row = "<tr><td>" + farmInput + "</td><td>" + priceInput + "</td><td>" + quantityInput +
      "</td><td><img src='img/" + imageInput + "' class='img-responsive'></td></tr>";

      $("table tbody").append(new_row);
      $(".newProduce").hide();
      $("form").trigger("reset");
      return false;

    });
    //closes the form when you click x
    $(".close").click(function(){
      $(".newProduce").hide();
    });
  });
