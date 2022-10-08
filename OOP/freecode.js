// OOP

let dog ={
name:"tommy",
legs:4,

sayLegs:function(){
    return "how it can be possible that this dog has"+dog.legs+"lmao this sounds pathetic...!!"
}    
};

dog.sayLegs();






function myphoneusers(val){
 
    var myval='';
    var lookup={
  
   "phone1":"amen",
   "phone2":"harry bhai",
   "phone3":"baba jani",
   "phone4":"mama ",

    };
 myval=lookup[val];
 return myval;
 
}

//COMPLEX OBJECTS

var music={
    "collecion":"my field",
    "my film name":"rick nd morty",
    "released_year":1993,
    "form":[
        "cd",
        "movie",
        "pop corn"
    ],

}

//COMPLEX OBJECT USING DOT NOTATION


var Myobjects={
    "name":"amen",
    "age":20,
    "gender":"female",
    "goals":"To be web developer",
    "hobbies":{
        "like to play guitar":"sia song",
        "love to sing":"only in bathroom XD",
        "sometimes love to play video games too":"GTA 5 , STAY,FORTNITE"
    },
    "LAST":"ONE",
}

var otheroneobject=Myobjects.name.age.gender.goals.hobbies["like to play guitar"];
console.log(otheroneobject);


//ASSESSING NESTED ARRAY


const Myplants=[{
    Fruits:{
        "food":"borgor",
        "drink":"juice",
        "softdrinks":"coke" 
    },
    Juice:"grapes",
    APPLE:"juice",
    Banana:"yellow",
},

{
    Colors:"yellow",
    color:"green",
    color:"blue",
    color:"orange",
}
];

Myplants[0].Fruits[1];


//  make the code more reuable with the use of (this)


const mydog={
    name:"tommy",
    height:1.5,
    leg:2,
    sayLegs:function(){
        return "it is not possible that any dog has"+this.leg+"legs lol";
    }
};
dog.sayLegs;