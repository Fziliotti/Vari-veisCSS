var body = document.querySelector('body');


function alterarVariavel() {
    body.style.setProperty("--site-bg", "#323232");
    body.style.setProperty("--bgdiv", "#e1e1e1");
    body.style.setProperty("--fontColor", "#323232");
    myVar = getComputedStyle(body).getPropertyValue("--site-bg");
    console.log(myVar);
}