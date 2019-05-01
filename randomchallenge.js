/* CHALLENGES */

let string =("Isaac")
let num = 22
let bool = true 

let array1 = ["item1","item2","item3","item4",]
array1.push("item5")
console.log(array1)

for(arrayIndex = 0; arrayIndex<array1.length; arrayIndex++){
    console.log(array1[arrayIndex]);
}


const person = {

    withdrawal: 150,
    balance: 500,
    
account(){
    newbalance = (person['balance'] - person['withdrawal']);
    return `you withdrew ${this.withdrawal} pounds. You have ${this.newbalance} pounds left in your account.`;
}};

    console.log(person.account())

    /* Write a jvascript program to get the current date. */

    const currentDate = {

        day: "Monday",
        date: 29,
        month: "April",


    };

 console.log(` The date today is ${currentDate.day} ${currentDate.date}th ${currentDate.month}`);

    /* Catching errors! */

    var x = 99;
    try {
          if(x < 0) throw "too low";
          if(x > 6) throw "too high";
    }
    catch(err) {
          console.log(err);
    };

    /* Reversing a string 

    string = "Codenation";

    for(s = string.length() - 1; s >= 0; s--){
        console.log(`${string}`)
    };
*/
/* Create a function that takes one parameter (fruits) and
checks whether it is bananas or pears.
If it is then log to the console a template string which says “awesome cheers, I like (fruits)”
 else log to the console “No thanks, I don’t like (fruits)” */

 let fruits = "Pears";

 if (fruits == "Bananas"|| fruits == "Pears"){
    console.log(`Awesome cheers, I like ${fruits}`)
 } 
 else if (fruits !== "Bananas"|| fruits !== "Pears"){
    console.log(`No thanks, I dont like ${fruits}`)

 };

 /* Write a function called dataChecker which takes two parameters (string, number).
If the string is equal to ‘codenation’ and the number is equal to 1 
then log to the console a template string to tell us both are correct.
If the string is ‘codenation’ but the number isn’t 1 log to the console a template string that tells us 
the string was correct but the number was wrong. Finally if the string was not equal to ‘codenation’ 
then log to the console a template string which tells us that the string was wrong. */

let string1 = "codenation";{
let num1 = 1;

function dataChecker(){


    if (string1 == "codenation" && num1 == 1)
    return `Correct`

    else if (string1 !== "codenation")
    return `Your string was incorrect`

    else 
    return `Your number was incorrect`

}};
 console.log(dataChecker());


