/* OBJECTS , objects are containers that can store data and functions.*/

let opinion1 = `true`
let opinion2 = `true`

if(opinion1 == `true` && opinion2 == `true`){
    console.log("Lets play next week!")
}
else(console.log("You're missing out"))

/* Create an object that when the day is bad/average, the insult is changed accordingly*/
let day = "bad"
let insult = "" 

let person = {

    name: "Isaac",
    age: 22,
    averageDay: "mild insult needed – you oaf.",
    badDay: "The eyes are open, the mouth moves, but Mr Brain has long since departed, hasn’t he?",
    };
    
if(day=="bad"){
    insult = (person['badDay'])
    console.log(insult)
}
else if(day =="average"){
    insult = (person['averageDay'])
    console.log(insult)

}
/* We can add items to objects by the following */

person.favSong = ['Song1','Song2','Song3'];

/*  OR  */

person['favSong'] = ['Song1','Song2','Song3'];

/* The differnece is brackets give us slightly more flexability later on */

console.log(person['favSong']);

/* Adding functions */

const person1 = {

    name: "Isaac",
    age: 22,

sayHi(){
    return `Hello, my name is ${this.name}`;
}};

    console.log(person1.sayHi())

/* Create an object called pet with key values of name, typeofpet, age, colour. And methods called eat/drink that return what its doing */

let eat = false
let drink = true

const pet = {

    name: "Jerry",
    typeOfPet: "Cat",
    age: 4,
    colour: "Ginger",

petState(){
    if(eat==true)
    return `${this.name} is eating.`
else if(drink==true)
    return `${this.name} is drinking.`
}};
    console.log(pet.petState())

/* Class's are a class of object, We call the constructors() method every time we create a new instance of our bunny class. instances create a new bunny, allowing thoudands of objects created around the same constructor. */

class Bunny{
    constructor(name){
        this._name = name;
        this._hops = 0;
    }
    get name(){
        return this._name;
    }
    get hops(){
        return this._hops;
    }
    increaseHops(){
        this._hops++;
    }}
/* Objects are just instances of classes, heres how we add a new instance of bunny class */

const rosie = new Bunny("Rosie");
console.log(rosie.name);

/* We use the `NEW` keyword to create an instance of our bunny class.We create a variable named rosie that will store an instance of our Bunny class. */
/* The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.*/

/* Create a new bunny called lizzie with 0 hops*/

const lizzie = new Bunny("Lizzie")
console.log(lizzie.name);
console.log(lizzie.hops);

/* The get name and get hop are known as 'GETTERS', this is data stored in our object */
/*    }
    get name(){
        return this._name;
    }
    get hops(){
        return this._hops;
*/
/* We’ve added _ to the names, which means don’t access these things directly, use the getter methods. */


/* create a class called Cars, car registration number, number of hours parked and total amount charged.*/

class Cars{
    constructor(reg){
        this._reg = reg;
        this._hours = 0;
        this._charge = 0.00;
    }
    get reg(){
        return this._reg;
    }
    get hours(){
        return this._hours;
    }
    get charge(){
        return this._charge;
    }
increaseHours(){
    this._hours++;
    this._charge += 1.50;
}}
 
/* Now we add a car thats parked for 5 hours */

const pay = (reg, hr) => {
const cars = new Cars(reg);
for (i = 0; i < hr; i++){
    cars.increaseHours();
}   
console.log(`You need to pay £${cars.charge} for ${cars.hours} hours.`);
}
pay("M7 CAR", 5);

/* Add a SUBCLASS for staff, their number, credits and charged price. subclass's inherit code from a main class that can be reused for each subclass, we dont have to write as much */

class staff extends Cars {
    constructor(reg){
    super(reg);
    this._staffnum = staffnum;
    this.credits= credits;
    this.staffcharge = 50.00;
}
get staffnum(){
    return this._staffnum;
}
get credits(){
    return this._credits;
}
get staffcharge(){
        return this._staffcharge;
}}

const paystaff = (_credits, _hours, _staffcharge) => {
    const staffcar = new staff(reg);
    for (let i = 0; i >= _hours; i++){
        staffcar.creditleft();
    }   
    console.log(Cars.staff)
    console.log(`You have spent ${staff.staffcharge} staff tokens, you parked for ${staff.hours} hours.`);
paystaff("M8", 5, 150, 3445);


/* Inheritance, we can make a whole animal kingdom from one class */

class Animal{
    constructor(name){
this._name = name;
this._hunger = 100;
this._thirst = 100;
}
get name(){
    return this._name;
}
get hunger(){
    return this._hunger;
}
get thirst(){
    return this._thirst;
}
eat(){
    this._hunger--;
} 
drink(){
    this.thirst--;
}}

/* Our subclasses, those which inherit from Animal, now won’t need that coding up again. */

class Rabbit extends Animal {
    constructor(name, lovesCarrot){
super(name);
    this._lovesCarrot = lovesCarrot;
}
get lovesCarrots(){
    return this._lovesCarrot;
}
}
const roger = new Rabbit("Roger", true);

/* We can also add arrays to objects */

const Ned = new Rabbit(
    "Ned",
true,
    ["basil", "rockets", "broccoli"]
); 


/* User selects the kind of animal they’d like (dog, cat, rabbit) and you have to play with it, feed it, give it drinks etc. There should be consequences across the board if you don’t play, it gets bored, if you do, it’s happy, but gets thirsty, that kind of thing. */

class cyberPet{
    constructor(animal){
        this._animal = animal;
        this._petname = "";
        this._play = true
        this._eat1 = true
        this._drink = true
    }
    get animal(){
        return this._animal;
    }
    get petname(){
        return this._petname;
    }
    get play(){
        return this._play;
    }
    get eat1(){
        return this._eat1;
    }
    get drink(){
        return this._drink;
    }
    increaseHops(){
    this._hops++;
    }};
    
const Bulldog = new cyberPet("Bulldog");
console.log(Bulldog.animal);

} 

/* ABSTRACTIOBN */
/* Abstraction is a process where you show only “relevant” data and “hide” unnecessary details of an object from the user. */
/* For example when you log into amazon, the log in will use lots of code but only show relevant data. */
