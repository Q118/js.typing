//using the random quotes api for now
//TOdo find soemthing that will include symbals and such for dev typers so code and such like random lines of code?

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'

const quoteDisplayElement = document.getElementById('quoteDisplay')

const quoteInputElement = document.getElementById('quoteInput')

//this input element or event listener gets called every single time something inside of the input box changes
quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if(character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        }else if(character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
        }


    })


})


function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)

}

async function renderNewQuote() {
    const quote = await getRandomQuote()

    quoteDisplayElement.innerHTML = '';

//get each individual character of our string, creating a sapn for and and then setting the text of that span to that individual character
quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    
    //characterSpan.classList.add('incorrect')

    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
})

    quoteInputElement.value = null

}

renderNewQuote()