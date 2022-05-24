var checkbox = document.querySelector("#exampleCheck1");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        var b1=document.querySelector(".login__button").disabled = false;
         
    } else {
        document.querySelector(".login__button").disabled = true;

    }
});