
/* ARRAYS */

/* PUSH adds a new item in list/Array.*/

let coffeeOrder = ['0 - Youtube', 'Reddit', 'Facebook'];
    coffeeOrder.push("Twitch")
    coffeeOrder.push("Discord")
console.log(coffeeOrder);

/* POP removes the last thing on the list.*/ 

let coffeeOrder1 = ['1 - Youtube', 'Reddit', 'Facebook'];
    coffeeOrder1.push("Twitch")
    coffeeOrder1.push("Discord")
    coffeeOrder1.pop();
console.log(coffeeOrder1);

/* SHIFT method removes the first array element and "shifts" all other elements to a lower index.*/
let coffeeOrder2 = ["2 - Youtube", "Reddit", "Facebook"];
    coffeeOrder2.push("Twitch")
    coffeeOrder2.push("Discord")
    coffeeOrder2.shift();
    console.log(coffeeOrder2);

/* UNSHIFT method adds a new element to an array (at the beginning), and "unshifts" older elements.*/

let coffeeOrder3 = ['3 - Youtube', 'Reddit', 'Facebook'];
    coffeeOrder3.push("Twitch")
    coffeeOrder3.push("Discord")
    coffeeOrder3.unshift("DLive");
console.log(coffeeOrder3);