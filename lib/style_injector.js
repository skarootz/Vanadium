jQuery(document).ready(function () {
    var style = jQuery.ajax({
        type: "GET",
        url: "http://github.com/lambder/Vanadium/raw/master/css/wiki.css",
        async: false        
    }).responseText;
    jQuery('#css_placeholder').replaceWith('<style  TYPE="text/css">div.vanadium-invalid {    border-color: red !important;    border-style: solid !important;}div.vanadium-valid {    border-color: green !important;    border-style: solid !important;}.vanadium-message-value {    font-style: italic;    text-decoration: underline;}.vanadium-advice.vanadium-invalid, .vanadium-advice.vanadium-invalid * {    color: red;}input.vanadium-valid {    background-color: greenyellow;}input.vanadium-invalid {    background-color: pink;}input.vanadium-valid ~ .vanadium-valid-advice {    display: inline !important;    color: green;}</style>');
});