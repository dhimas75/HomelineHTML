
function validate() {

    var fname = $("#fname").val();
    var noid = $("#noid").val();
    var email = $("#email").val();
    var phone = $("#phone").val();


    if (fname == '' || noid == '' || email == '' || phone == '') {
        alert('Please fill all form');
        return false;
    }
    else {
        window.open("checkout.html")
        return removeDani;
    }
}