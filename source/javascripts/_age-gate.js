function validateAge() {
    var age = document.forms["age-gate"]["age"].value;
    if ( age < 13 ) {
        alert('Sorry, you must be older to enter this sweepstakes.');
        return false
    }
    else if ( $.isNumeric(age) == false ){
        alert('Sorry, you must enter a number.');
        return false
    }
    else{
        $('.gate').hide('slow');
        return false
    }
}
