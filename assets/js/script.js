jQuery(document).ready(function () {

    jQuery(".current").mouseover( function () {
        jQuery(".current").hide();
        jQuery(".secondary").show();
    });

    jQuery(".secondary").mouseleave( function () {
        jQuery(".current").show();
        jQuery(".secondary").hide();
    });

});