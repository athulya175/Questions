// console.log(this)


//inside an object method
const person={
    name:"Athulya",
    greet:function(){
        console.log(this.name)
    }
}
person.greet()
// here this-> object person




// inside an arrow function

const person1={
    name:"Athulya",
    greet:()=>{
        console.log(this.name)
    }
}
// output empty


class Car{
    constructor(brand){
        this.brand=brand
    }
    showBrand(){
        console.log(this.brand)
    }
}
const myCar=new Car("Tesla")
myCar.showBrand()