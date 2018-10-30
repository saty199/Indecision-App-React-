var firstName= (fullName)=> fullName.split(' ')[0]

console.log(firstName("andrew mead"));

const multiplier= {
    numbers:[1,2,3,4],
    multiplyBy:'2',
    multiply(){
        return this.numbers.map((number)=> number*this.multiplyBy); 
    }
}

console.log(multiplier.multiply());