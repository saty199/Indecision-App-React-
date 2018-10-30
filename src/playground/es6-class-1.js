class Person{
    constructor(name= 'satyam', age = 0){
        this.name=name
        this.age= age
    }

    getGretting(){
        return ` ${this.name} is ${this.age} years old. `;
    }
}
class Student extends Person{
constructor(name,age,stream){
    super(name,age);
    this.stream=stream;
}
    hasMajor(){
        return !!this.stream;
    }
    getGretting(){
        let description= super.getGretting();
        if(this.hasMajor()){
            description+= `and his stream is ${this.stream}`
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    
    getGretting(){
        let desc= super.getGretting();
        if(this.homeLocation){
            desc+=`I'm visiting from ${this.homeLocation}`
        }
        return desc;
    }
}
const me= new Traveller('Andres mead',26,'philidolphia');
console.log(me.getGretting());
const other= new Traveller();
console.log(other.getGretting());