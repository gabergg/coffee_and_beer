var hasEmail;
//var hasPhone;
var validEmail;
//var validPhone;

function validateForm() {
    $('div').remove('.alert');

    hasEmail = true;
    //hasPhone = true;
    validEmail = false;
    //validPhone = false;
    var reasons = [];

    reasons.push(validateEmail($('#email')));
    //reasons.push(validatePhone($('#phone')));

    if (!(hasEmail/* || hasPhone*/)) {
        $('#email').addClass('invalid-input');
        //$('#phone').addClass('invalid-input');
        //reasons.push("We need either your phone or your email!");
        reasons.push("We need your email to get in touch!");
    }

    if (reasons != "" && !(validEmail/* || validPhone*/)) {
        html_error = "<div class='alert alert-error'>" +
            "<a href='#' class='close' data-dismiss='alert'>&times;</a>" +
            "<strong>Whoops!</strong> Your form looks great! Except..." +
            "<ul>" +
            error_set(reasons) +
            "</ul></div>"

        $('#home_content').prepend(html_error);
        return false;
    }

    html_success = "<div class='alert alert-success'>" +
        "<a href='#' class='close' data-dismiss='alert'>&times;</a>" +
        "<strong>Success!</strong> You have been added to our trip!" +
        "</div>"

    $('#home_content').prepend(html_success);

    return true;
}

function error_set(reasons) {
    var error_html = "";
    for (var i = 0; i < reasons.length; i++) {
        if(reasons[i] == "") continue;
        error_html += "<li>" + reasons[i] + "</li>";
    }
    return error_html;
}

function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(fld) {
    var value = fld[0].value;
    var error = "";
    var tfld = trim(value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (value == "") {
        hasEmail = false;
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.addClass('invalid-input');
        error = "That's not an email address!";
    } else if (value.match(illegalChars)) {
        fld.addClass('invalid-input');
        error = "Your email address has some illegal characters!";
    } else {
        validEmail = true;
        fld.removeClass('invalid-input');
    }
    return error;
}
/*
function validatePhone(fld) {
    var value = fld[0].value
    var error = "";
    var stripped = value.replace(/[\(\)\.\-\ ]/g, '');

    if (value == "") {
        hasPhone = false;
    } else if (isNaN(parseInt(stripped))) {
        error = "Your phone number has some illegal characters!";
        fld.addClass('invalid-input');
    } else if (!(stripped.length == 10)) {
        error = "The phone number isn't the right length! Did you include your area code?";
        fld.addClass('invalid-input');
    }
    else {
        validPhone = true;
        fld.removeClass('invalid-input');
    }
    return error;
}*/