jQuery(document).ready(function () {
    var style = jQuery.ajax({
        type: "GET",
        url: "../css/style.css",
        async: false        
    }).responseText;
    jQuery('#css_placeholder').replaceWith('<style  TYPE="text/css">\n'+style+'\n</style>');
});