function validate() {

    var fname = $("#fname").val();
    var email = $("#email").val();
    var alamat = $("#adr").val();
    var kode = $("#zip").val();


    if (fname == '' || email == '' || adr == '' || zip == '') {
        alert('Please fill all form');
        return false;
    }
    else {
        let removeDani = localStorage.clear();
        alert("Happy Staycation :) ");
        window.open("index.html")
        return removeDani;
    }
}