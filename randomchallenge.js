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




