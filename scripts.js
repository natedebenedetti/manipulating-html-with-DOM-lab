document.addEventListener("DOMContentLoaded", function(event) { // waits for html to load before running any javascript
    
    // step 1
    let btn1 = document.createElement("button");
    let btnTxt = document.createTextNode("This Will Alert!"); 
    btn1.appendChild(btnTxt);
    document.body.appendChild(btn1);
    btn1.style.margin = '3em';
    btn1.style.borderColor = 'black';
    
    btn1.addEventListener('click', function () {
        alert('I TOLD YOU THIS WOULD ALERT!!');
    });

    //step 2

    


});