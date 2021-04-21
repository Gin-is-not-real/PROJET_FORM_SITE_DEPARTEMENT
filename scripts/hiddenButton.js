function hiddeNavButton() {
    let url = window.location.href;
    let btns = document.querySelectorAll(".nav-btn");

    btns.forEach(element => {
        if(url.includes(element.id)) {
            element.style.display = "none";
        }
    });
}
hiddeNavButton();

///////////////////////////////////////////////////
let totop = document.querySelector("#totop");
totop.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
