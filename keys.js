console.log("hi")

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", function() {
    this.classList.remove("green")
}));


window.addEventListener('keypress', function (e) {

    console.log(e.key)
    if (e.key === 'w') {
        document.querySelector(".W").classList.add("green")
    } else if (e.key === 'q') {
        document.querySelector(".Q").classList.add("green")
    } else if (e.key === 'e') {
        document.querySelector(".E").classList.add("green")
    } else if (e.key === 'r') {
        document.querySelector(".R").classList.add("green")
    } else if (e.key === 't') {
        document.querySelector(".T").classList.add("green")
    } else if (e.key === 'y') {
        document.querySelector(".Y").classList.add("green")
    } else if (e.key === 'u') {
        document.querySelector(".U").classList.add("green")
    } else if (e.key === 'i') {
        document.querySelector(".I").classList.add("green")
    } else if (e.key === 'o') {
        document.querySelector(".O").classList.add("green")
    } else if (e.key === 'p') {
        document.querySelector(".P").classList.add("green")
    } else if (e.key === 'a') {
        document.querySelector(".A").classList.add("green")
    } else if (e.key === 's') {
        document.querySelector(".S").classList.add("green")
    } else if (e.key === 'd') {
        document.querySelector(".D").classList.add("green")
    } else if (e.key === 'f') {
        document.querySelector(".F").classList.add("green")
    } else if (e.key === 'g') {
        document.querySelector(".G").classList.add("green")
    } else if (e.key === 'h') {
        document.querySelector(".H").classList.add("green")
    } else if (e.key === 'j') {
        document.querySelector(".J").classList.add("green")
    } else if (e.key === 'k') {
        document.querySelector(".K").classList.add("green")
    } else if (e.key === 'l') {
        document.querySelector(".L").classList.add("green")
    } else if (e.key === 'z') {
        document.querySelector(".Z").classList.add("green")
    } else if (e.key === 'x') {
        document.querySelector(".X").classList.add("green")
    } else if (e.key === 'c') {
        document.querySelector(".C").classList.add("green")
    } else if (e.key === 'v') {
        document.querySelector(".V").classList.add("green")
    } else if (e.key === 'b') {
        document.querySelector(".B").classList.add("green")
    } else if (e.key === 'n') {
        document.querySelector(".N").classList.add("green")
    } else if (e.key === 'm') {
        document.querySelector(".M").classList.add("green")
    } else if (e.key === ',') {
        document.querySelector(".comma").classList.add("green")
    } else if (e.key === '.') {
        document.querySelector(".period").classList.add("green")
    } else {
        document.querySelector(".slash").classList.add("green")

    }

});

