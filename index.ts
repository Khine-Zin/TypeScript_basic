let female: boolean=true;
let num:number=1;
let str:string="Hello World"
let age:any=18   // any datatype can be(eg. string ,number,array,.... = any)


// object

type Person={
    name:string,
    age:number,
    gender:string,
    hello?:string
}

type Email={
    email:string
}

let person:Person & Email={
    name:"Mg Mg",
    age:20,
    gender:"male",
    email:"mgmg123@gmail.com"
}

let Hello:Partial<Person>={}    //for empty object  // same =>name?: ,age?:  , gender?:

let Animal:Required<Person>={   //need to push object data //  opposite of partial
    name:"Mg Mg",
    age:20,
    gender:"male"
}

let Fruit:Omit<Person,"gender">={     //remove gender
    name:"Mg Mg",
    age:20,
    gender:"male"
}

let item:Omit<Person,"age">={     //remain only age
    age:20,
}


//function

let sum=(x:number,y:number)=>{
    return x+y
}

sum(1, 2);


//Array

let arr:(string | number)[]=["hello","Min Ga Lar Par",1]


//Object Array

enum Gender{
    male,
    female,
    other
}

type Student={
    name:string,
    email:string,
    gender?: Gender   //OR   gender?:"male" |"female"
}

let student:Student[]=[
    {name:"aung aung",email:"aungaung@gmail.com"},
    {name:"aye aye",email:"aye@gmail.com",gender:Gender.female} // OR  {name:"aye aye",email:"aye@gmail.com",gender:female}
]