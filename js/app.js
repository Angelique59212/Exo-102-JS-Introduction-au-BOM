const button = document.createElement("button");
button.innerHTML = "Close";
document.body.appendChild(button);

document.getElementById("myButton").addEventListener("click", ()=> {
    let features = "menubar=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no";
    let google = window.open("https://www.google.com/search?client=firefox-b-d&q=google+translate", ' ', features);

    //resize
    google.resizeTo(700,700);
    //move
    google.moveBy(200,200);
    button.addEventListener("click", ()=> {
        google.close();
    })
})

