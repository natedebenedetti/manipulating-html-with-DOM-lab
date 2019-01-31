document.addEventListener("DOMContentLoaded", function (event) { // waits for html to load before running any javascript

    // step 1. Creates button without using HTML adds a label to the button and some styling
    let btn1 = document.createElement("button");
    let btnTxt = document.createTextNode("This Will Alert!");
    btn1.appendChild(btnTxt);

    let btnDiv = document.createElement('div'); // added in as a way of containing the buttons for use to manipulate their layout on the page.
    document.body.appendChild(btnDiv);
    btnDiv.appendChild(btn1);
    btnDiv.style.display = 'flex';
    btnDiv.style.justifyContent = 'center';
    btnDiv.style.margin = '3em';


    btn1.addEventListener('click', function () { //alerts a message whent the button above is clicked.
        alert('I WARNED YOU!');
    });

    //step 2. Creates a couple of variable and associates them with the two form elements created in my HTML.
    let btn2 = document.getElementById('btnSubmit');
    let formText1 = document.getElementById('formText1');

    btn2.addEventListener('click', function () { //alerts whatever the user types into the text input of the form.
        event.preventDefault();
        alert(formText1.value);

    });
    //step 3. //Links to a div created in HTML and creates 2 event listeners that change the background color and text color when moused over and reverts back when mouse leaves.
    let colorDiv = document.getElementById('colorDiv');

    colorDiv.addEventListener('mouseover', function () {
        colorDiv.style.backgroundColor = '' + randomColor() + '';
        colorDiv.style.color = '' + randomColor() + '';
    });
    colorDiv.addEventListener('mouseout', function () {
        colorDiv.style.backgroundColor = 'white';
        colorDiv.style.color = 'black';
    });

    //step 4. Linking to paragragh element created in HTML and changing color on click event.
    let p = document.getElementById('p1');
    p1.addEventListener('click', function () {
        p1.style.color = '' + randomColor() + '';
    })

    // part of step 4... function to create random color that is used to change color of paragraph text every click.
    function randomColor() {
        let R = Math.floor(Math.random() * 245);
        let G = Math.floor(Math.random() * 250);
        let B = Math.floor(Math.random() * 255);
        return 'rgb(' + R + ',' + G + ',' + B + ')';
    };


    // step 5. button, empty div, and event listener created in JS that creates a span with my Name and adds it to the div with every button click. 
    let spanDiv = document.createElement('div');
    spanDiv.style.textAlign = 'center';
    spanDiv.style.color = '' + randomColor() + '';
    let btn3 = document.createElement('button');
    let btn3Text = document.createTextNode('Add-a-span');
    let nameSpan = document.createElement('span');
    let myName = document.createTextNode('Nate DeBenedetti');

    btn3.appendChild(btn3Text);
    btnDiv.appendChild(btn3);
    document.body.appendChild(spanDiv);

    btn3.addEventListener('click', function () {
        nameSpan.appendChild(myName);
        spanDiv.appendChild(nameSpan);
        nameSpan.style.alignItems = 'center';
    });

    //step 6. Array created in JS and Linked to ul created in HTML.
    



});