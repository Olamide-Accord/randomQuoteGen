let bodyHtml = document.querySelector("body"),
    quoteText = document.querySelector(".quote-text"),
    authorText = document.querySelector(".author-text"),
    buttonQuote = document.querySelector("button");

document.addEventListener("DOMContentLoaded", makeRequest);

buttonQuote.addEventListener("click", makeRequest);

function makeRequest(){
    let requestUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    let request = new XMLHttpRequest();
    request.open("GET", requestUrl, true);
    request.send();
    request.onload = function(){
        const response = JSON.parse(request.response);
        const responseArray = response.quotes;

        function getRandomQuotes() {
            let randomQuote = responseArray[Math.floor(Math.random() * responseArray.length)];
            if(randomQuote.quote && randomQuote.author){
                quoteText.textContent = randomQuote.quote;
                authorText.textContent = randomQuote.author;
            }
        }
        getRandomQuotes();
        function randomColor() {
            let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexCode = "#";
            for(let i = 0; i < 6; i++){
                hexCode += randomGen(i);
            }
            function randomGen() {
                return hex[Math.floor(Math.random() * hex.length)];
            }
            bodyHtml.style.backgroundColor = hexCode;
            buttonQuote.style.backgroundColor = hexCode;
            quoteText.style.color = hexCode;
            authorText.style.color = hexCode;
        }
        randomColor();
    }
}