console.log("hi")

const keys = document.querySelectorAll(".key");

window.addEventListener('keypress', function (e) {

    console.log(e.key)
    if (e.key === 'w') {
        document.querySelector(".W").classList.add("green")
    } else if (e.key === 'q') {
        document.querySelector(".Q").classList.add("green")
    }

});

