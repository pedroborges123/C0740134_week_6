jQuery(document).ready(function () {

    jQuery(".current").mouseover(function () {
        jQuery(".current").hide();
        jQuery(".secondary").show();
    });

    jQuery(".secondary").mouseleave(function () {
        jQuery(".current").show();
        jQuery(".secondary").hide();
    });


    jQuery("#form-validator input").on('keyup', function () {
        validate();
    });

    jQuery("#form-validator button").click(function () {
        finalValidate();
    });

});

function validate() {
    var inputs = new Array();
    inputs[0] = jQuery('#fname');
    inputs[1] = jQuery('#lname');
    inputs[2] = jQuery('#email');
    inputs[3] = jQuery('#uid');
    inputs[4] = jQuery('#password');
    inputs[5] = jQuery('#confirm');

    var errors = new Array();
    errors[0] = "Please enter your first name!";
    errors[1] = "Please enter your last name!";
    errors[2] = "Please enter your email!";
    errors[3] = "Please enter your user id!";
    errors[4] = "Please enter your password!";
    errors[5] = "Please confirm your password!";

    var i;
    for (i in inputs) {
        var errMessage = errors[i];
        var parent = inputs[i].parent();
        if (inputs[i].val() === "") {

            parent.children(".error").html(errMessage).show();

        } else if (i === 2) {
            var atpos = inputs[i].val().indexOf("@");
            var dotpos = inputs[i].val().lastIndexOf(".");

            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].val().length) {

                parent.children(".error").html(errMessage).show();
            } else {
                parent.children(".error").html("OK").show();
            }

        } else if (i === 5) {
            var first = jQuery("#password").val();
            var second = jQuery("#confirm").val();

            if (second !== first) {
                parent.children(".error").html("Your passwords don't match!").show();
            } else {
                parent.children(".error").html("OK").show();
            }
        } else {
            parent.children(".error").html("OK");
            parent.children(".error").show();
        }
    }

    function finalValidate() {

        var errors = jQuery(".error").filter(function () {
            return jQuery(this).text() === "OK";
        }).length;
        if (errors === 6) {
            jQuery("#errFinal").html("All the data you entered is correct!!!").show();
        }
    }


}