// const login = async function (username, password) {

//     if (!username || !password)
//         throw "No creditional"
//     if (password !== '123')
//         throw "Incorrect Password"
//     return true
// }

// login('aaa', '1234')
//     .then((data) => {
//         console.log("You logged In,", data)
//     })
//     .catch((err) => {
//         console.log("You can't login", err)
//     })


// let crypto = `{"ticker":{"base":"BTC","target":"USD","price":"24088.62744227","volume":"11263.98516839","change":"-57.92015531"},"timestamp":1660549745,"success":true,"error":""}`;
// crypto = JSON.parse(crypto);
// console.log("Our Crypto is : ", crypto.ticker.base, " and price is :", crypto.ticker.price);


// https://api.cryptonator.com/api/ticker/btc-usd

// const req = new XMLHttps;
// req.onload = function () {
//     console.log("Request is starting")
//     console.log(this)
// }

// req.onerror = function () {
//     console.log("We have an error !!!")
// }
// req.open("GET", 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log("RESPONSE", res)
//     })
//     .catch((err) => {
//         console.log("Error", err)
//     })


// Example POST method implementation:


const getCoin = async function () {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    console.log(res);

}

findJoke();


function findJoke() {
    const req = new XMLHttpRequest();

    let data = "";
    req.onload = function () {
        console.log("Start")
        data = JSON.parse(this.responseText)
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


