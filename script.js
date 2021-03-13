//using the random quotes api for now
//TOdo find soemthing that will include symbals and such for dev typers so code and such like random lines of code?

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'

const quoteDisplayElement = document.getElementById('quoteDisplay')

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)

}

async function renderNewQuote() {
    const quote = await getRandomQuote()

quoteDisplayElement.innerText = quote;

    console.log(quote)
    
}

renderNewQuote()