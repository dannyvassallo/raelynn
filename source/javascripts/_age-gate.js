function validateAge() {
    var Bdate = document.forms["age-gate"]["age"].value;
    var Bday = +new Date(Bdate);

    var age = (Date.now() - Bday) / (31557600000);
    if ( age < 13 ) {
        alert('Sorry, but you are not eligible for this sweepstakes.');
        return false
    }
    else if ( $.isNumeric(age) == false ){
        alert('Sorry, your age must be equal to a number.');
        return false
    }
    else{
        $('.gate').hide('slow');
        return false
    }
}


