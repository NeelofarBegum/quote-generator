function newQuote(){

let quotes = [

"Believe in yourself.",
"Small steps lead to big success.",
"Never stop learning.",
"Dream big and work hard.",
"Success comes from consistency."

];

let random = Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerText = quotes[random];

}
