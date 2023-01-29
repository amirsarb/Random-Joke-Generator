

findJoke();

function findJoke() {
    const req = new XMLHttpRequest();

    let data = "";
    req.onload = function () {
        console.log("Start")
        data = git(this.responseText)
        console.log(data.joke)
        document.querySelector("#joke").innerText = data.joke;
    }
    req.onerror = function () {
        console.log("Error")
        console.log(this)
    }

    req.open("GET", 'https://icanhazdadjoke.com/');
    req.setRequestHeader("Accept", "application/json");
    req.send();
}
let newbtn = document.querySelector("#newjoke").addEventListener("click", function () {
    findJoke();
})


