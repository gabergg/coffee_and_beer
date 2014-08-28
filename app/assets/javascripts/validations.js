var hasEmail;
var hasPhone;
var validEmail;
var validPhone;

function validateForm() {
    hasEmail = true;
    hasPhone = true;
    validEmail = false;
    validPhone = false;
    var reason = "";

    reason += validateEmail($('#email'));
    reason += validatePhone($('#phone'));

    if(!(hasEmail || hasPhone)) {
        $('#email').addClass('invalid-input');
        $('#phone').addClass('invalid-input');
        reason += "We need either your phone or your email!";
    }

    if (reason != "" && !(validEmail || validPhone)) {
        alert("Your form looks great! Except...\n" + reason);
        return false;
    }

    return true;
}

function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(fld) {
    console.log(fld);
    var value = fld[0].value;
    var error = "";
    var tfld = trim(value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (value == "") {
        console.log("1");
        hasEmail = false;
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.addClass('invalid-input');
        console.log("2");
        error = "That's not an email address!\n";
    } else if (value.match(illegalChars)) {
        fld.addClass('invalid-input');
        console.log("3");
        error = "Your email address has some illegal characters!\n";
    } else {
        validEmail = true;
        fld.removeClass('invalid-input');
    }
    return error;
}

function validatePhone(fld) {
    var value = fld[0].value
    var error = "";
    var stripped = value.replace(/[\(\)\.\-\ ]/g, '');

    if (value == "") {
        hasPhone = false;
    } else if (isNaN(parseInt(stripped))) {
        error = "Your phone number has some illegal characters!\n";
        fld.addClass('invalid-input');
    } else if (!(stripped.length == 10)) {
        error = "The phone number isn't the right length! Did you include your area code?\n";
        fld.addClass('invalid-input');
    }
    else {
        validPhone = true;
        fld.removeClass('invalid-input');
    }
    return error;
}