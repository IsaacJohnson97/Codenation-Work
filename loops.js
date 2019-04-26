
/*Loops*/

let name = ("Isaac") 
let timeMin = ('5')
const sandwichOrder = (top1, top2, top3, top4, top5)=>{
    console.log(`${name}, your customized sandwich is being prepared: ${top1}, ${top2}, ${top3}, ${top4} and ${top5}. It will be ready in ${timeMin} minuets!`);
}
sandwichOrder("Bacon","Brie","Turkey","Stuffing","Red Onion Chutney");

/* print 3 drinks from an array */

let favouriteDrinks = ["Coke", "Fanta", "Tonic"];
console.log(favouriteDrinks[0]);
console.log(favouriteDrinks[1]);
console.log(favouriteDrinks[2]);

/* BUT in order to do this 1000 times we'd need a loop */

let favouriteDrinks1 = ["Coke","Fanta","Tonic","Red Bull"];
for(drinksIndex = 0; drinksIndex<favouriteDrinks1.length; drinksIndex++){
    console.log(favouriteDrinks1[drinksIndex]);
}

/* Create an array that lists your favourite films, up to 5 elements, Add 2 more using a method, Use a loop to cycle through the array*/

let favFilm = ["Fight Club", "Isle of dogs", "Gladiator", "Star Wars", "Lord of the Rings"]
    favFilm.push("The Dark Knight")
    favFilm.push("The Devils Rejects")

for(filmIndex = 0; filmIndex<favFilm.length; filmIndex++){
    console.log(favFilm[filmIndex]);
}

/* A while loop can loop for a certain time rather than a for Loop that could loop forever */

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Spade";
while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard=cards[Math.floor(Math.random()*3)];
}
console.log(currentCard);

/* A Loop and Array checking position 3 is ghostbusters */

let film = ["Film", "Film", "Ghostbusters", "Film"]

for(filmIndex = 0; filmIndex<film.length; filmIndex++){
    console.log(film[filmIndex]);
}

const filmCheck = (film)=> {}
if(film[2]== "Ghostbusters"){
    console.log("Yey its Ghostbusters")
}
else(console.log("Booo, we want Ghostbusters"))