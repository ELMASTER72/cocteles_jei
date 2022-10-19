const main = document.getElementById("Cards");
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

window.addEventListener("DOMContentLoaded",card);

const search = document.getElementById('browse');


search.addEventListener('keyup', e =>{
    if (e.target.matches("#browse")) {
        document.querySelectorAll(".card").forEach(cards =>{
            cards.textContent.toLowerCase().includes(e.target.value)
            ?cards.classList.remove("filter")
            :cards.classList.add("filter")
    });
}})



function card(){
    fetch(URL)
    .then(Response => Response.json())
    .then(Response => Response.drinks.forEach(element => {
        // console.log(element);
        cardcreate(element);
    }))
}

function cardcreate(element) {
    const card = document.createElement('div');
    card.classList.add("card");

    const imgcard = document.createElement('img');
    imgcard.classList.add("imgcards");

    const namecard = document.createElement('h1');
    namecard.classList.add("namescard");

    const Category = document.createElement('h1');
    Category.classList.add("cardcategory")

    imgcard.setAttribute('src',element["strDrinkThumb"]);
    namecard.textContent = element["strDrink"];
    Category.textContent = element["strCategory"]

    card.appendChild(imgcard);
    card.appendChild(namecard);
    card.appendChild(Category);

    main.appendChild(card);

}

