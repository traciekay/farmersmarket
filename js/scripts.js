var users = ["Tracy", "Mulu", "Steve" , "Test"]; //sample Users
var passwords = ["T", "M", "S" , "T"]; //sample Users passwords
var uLocation = ["Kisumu", "Machakos", "Nyeri" , "T"]; //sample Users passwords
var uPnone = ["0729223896", "0713919051", "0717627108" , "00"]; //sample Users passwords
var i = 0;
$(document).ready(function() {
  // var users = ["Tracy", "Mulu", "Steve" , "Test"]; //sample Users
  // var passwords = ["T", "M", "S" , "T"]; //sample Users passwords
  // var uLocation = ["Kisumu", "Machakos", "Nyeri" , "T"]; //sample Users passwords
  // var uPnone = ["0729223896", "0713919051", "0717627108" , "00"]; //sample Users passwords
  // var i = 0;

  $("#userLogin").submit(function(event) {
    var username = $("input#uname").val();
    var password = $("input#upasswrd").val();
    var usertype = $('input[name=usertype]:checked').val();
    // console.log(usertype);

    for (i = 0; i < 4; i++) {
      if (username === users[i] ) {
          if (password === passwords[i]) {
            //Login Successful
            loggedUser = username;
            console.log(i);
            $(".loginMsg").text("loggedUser =" + username);
            if(usertype === "1"){
              location.replace("farmer.html");
              console.log(users[1]);
              $(".farmerName").text("Mulu");
              $(".farmerContact").text(uPnone[1]);
              $(".farmerLocation").text(uLocation[1]);
            }else {
              location.replace("buyer.html");
            }
            break;
          }else {
            $(".loginMsg").text("Wrong Username/password!!");
          }
        }
        $(".loginMsg").text("Wrong Username/password!!");
    }

    event.preventDefault();
  });

  //User Register
  $("#userRegForm").submit(function(event) {
    var username = $("input#username").val();
    var password = $("input#pwd").val();
    //replacing User & password on the Sample array
    users[3] = username;
    passwords[3] = password;

    $(".RegMsg").text("Account Created. Go to Log in");
    event.preventDefault();
  });

// Switching between User login & Reg form
$("#toRegForm").click(function(event) {
  $(".login").hide();
  $(".register").show();
  event.preventDefault();
});

$("#toUserLogin").click(function(event) {
  $(".register").hide();
  $(".login").show();
  event.preventDefault();
});

  //Form Validation and submission
  $('#contact_form').bootstrapValidator({
         // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
         feedbackIcons: {
             valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
         },
         fields: {
             first_name: {
                 validators: {
                         stringLength: {
                         min: 2,
                     },
                         notEmpty: {
                         message: 'Please supply your first name'
                     }
                 }
             },

             email: {
                 validators: {
                     notEmpty: {
                         message: 'Please supply your email address'
                     },
                     emailAddress: {
                         message: 'Please supply a valid email address'
                     }
                 }
             },
             phone: {
                 validators: {
                     notEmpty: {
                         message: 'Please supply your phone number'
                     },
                     phone: {
                         country: 'US',
                         message: 'Please supply a vaild phone number with area code'
                     }
                 }
             },
             comment: {
                 validators: {
                       stringLength: {
                         min: 10,
                         max: 200,
                         message:'Please enter at least 10 characters and no more than 200'
                     },
                     notEmpty: {
                         message: 'Please supply a message'
                     }
                     }
                 }
             }
         })
         .on('success.form.bv', function(e) {
             $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                 $('#contact_form').data('bootstrapValidator').resetForm();

             // Prevent form submission
             e.preventDefault();

             // Get the form instance
             var $form = $(e.target);

             // Get the BootstrapValidator instance
             var bv = $form.data('bootstrapValidator');

             // Use Ajax to submit form data
             $.post($form.attr('action'), $form.serialize(), function(result) {
                 console.log(result);
             }, 'json');
         });

         // Get the modal
          var modal = document.getElementById('id01');

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          }
   });
