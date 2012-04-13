Vanadium.i18n = {
    baselang:'en',
    language:'es'
};

Vanadium.configurei18n = function configi18n() {

    var strings_en = {
        'KEY_REQUIRED_FIELD':'This is a required field.',
        'KEY_VALUE_SHOULD_BE_X_CHARS_LONG':'The value should be <span class="' + Vanadium.config.message_value_class + '">%d</span> characters long.',
        'KEY_USE_A_VALID_EMAIL_ADDRESS' : 'Please enter a valid email address. For example fred@domain.com .'

    };

    var strings_es = {
        'KEY_REQUIRED_FIELD':'Este es un campo requerido.',
        'KEY_VALUE_SHOULD_BE_X_CHARS_LONG':'El valor deberia tener <span class="' + Vanadium.config.message_value_class + '">{0}</span> caracteres.',
        'KEY_USE_A_VALID_EMAIL_ADDRESS' : 'Por favor, ingrese un correo electrónico válido. ej. fred@dominio.com '

    };




//  init strings
    Vanadium.i18n.strings = {

    };



    eval("var baseStrings = strings_" + Vanadium.i18n.baselang);

//  load all from base
    jQuery.each(baseStrings, function (i, val) {
        Vanadium.i18n.strings[i] = val;
    });

    eval("var selectedLanguage = strings_" + Vanadium.i18n.language);


//  merge to the another
    jQuery.each(selectedLanguage, function (i, val) {
        Vanadium.i18n.strings[i] = val;
    });


};

String.prototype.format = function(){
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern, function(capture){ return args[capture.match(/\d+/)]; });
}

Vanadium.i18n.text = function (key, args) {

    var value = Vanadium.i18n.strings[key].format(args);

    return value;
};
