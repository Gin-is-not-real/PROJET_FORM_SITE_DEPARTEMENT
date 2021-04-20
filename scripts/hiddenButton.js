let url = window.location.href;
let btns = document.querySelectorAll(".nav-btn");
// console.log(btns);

btns.forEach(element => {
    // console.log(element.style.display);
    if(url.includes(element.id)) {
        element.style.display = "none";
    }
});
