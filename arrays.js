
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

/* Declare a variable that stores an array.
This array should have three items and each of these
items should be an array with 3 items.
Log the 3rd item of the 2nd item to the console.*/

let myArray = [];

let array1 = new Array("1","2","3")
let array2 = new Array("4","5","6")
let array3 = new Array("7","8","9")

console.log(array2[2]);

/* ORRRR */

let storeArray = [
    ['item1','item2','item3'],
    ['item4','item5','item6'],
    ['item7','item8','item9']
];

console.log(storeArray[1][2]);

/* PALINDROME */

String.prototype.count=function(char) { 
    return this.split(char).length-1;
}

function isAnagramOfPalyndrom(){
    string.replace(" ", "");  
    var even = string.length % 2 == 0;
    var flag = false;


    for(var i = 0; i < string.length; i++){

    if(string.count(string.charAt(i)) % 2 != 0){
       if(even) return false;
       else{
        if(flag) return false;
        flag = true;
       }
    }



}
return true;

}
console.log(this.isAnagramOfPalyndrom)