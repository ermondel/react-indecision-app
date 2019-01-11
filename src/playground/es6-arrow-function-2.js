const add = (a, b) => {
    return a + b;
}
console.log(add(55, 1));

const user = {
    name: 'Andrew',
    cities: [ 'Philadelphia', 'New York', 'Dublin' ],
    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [11, 45, 78 ],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
