$(document).ready(function() {


    $("form#sort").submit(function(event) {
      var item = $('#selectedItem :selected').val();
      var town = $('#selectedTown :selected').val();

      var itemId = "."+item;
      var townId = "."+town;

      //Displaying the Loading gif
        $("#loadingImg").attr("src","img/loading.gif");
        $(".searchResults").text("Searching");
      $('.col-md-3').hide();
      $(".searchMessage").show();
      setTimeout(
  function()
  {
    $(".searchMessage").hide();
    $('.col-md-3').show();
    if(item != "all"){
      $('.col-md-3').not(itemId).hide();
    }
    // sorting by Location
    if(town != "all"){
      $('.col-md-3').not(townId).hide();
    }
    if($('.row').children(':visible').length == 0) {
        $(".searchMessage").show();
        $("#loadingImg").attr("src","img/notfound.png");
        $(".searchResults").text("Nothing Found!!");
    }else{
      $(".searchMessage").hide();
    }
  }, 1000); //delay for 1 sec

      event.preventDefault();
    });

    });
