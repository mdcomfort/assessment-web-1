
function favoriteColor(evt) {
    evt.preventDefault()
    alert('My favorite color is orange.')
}

function favoritePlace(evt) {
    evt.preventDefault()
    alert('My favorite place is Sleeping Bear Dunes National Lakeshore.')
}

function favoriteRitual(evt) {
    evt.preventDefault()
    alert('My favorite ritual is making Earl Grey to read in the evenings.')
}

function handleSubmit2(evt) {
    evt.preventDefault()
    alert('Your response has been submitted.')
}

let myFavoriteColor = document.querySelector('button#color')
myFavoriteColor.addEventListener('click', favoriteColor)

let myFavoritePlace = document.querySelector('button#place')
myFavoritePlace.addEventListener('click', favoritePlace)

let myFavoriteRitual = document.querySelector('button#ritual')
myFavoriteRitual.addEventListener('click', favoriteRitual)

let aboutYou = document.querySelector('form#about')
aboutYou.addEventListener('submit', handleSubmit2)
