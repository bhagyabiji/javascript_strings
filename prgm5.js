car = {
    name:'belano',
    model:'Hatch back',
    manufacturer:'Maruti',
    price:'10Lakhs'
}

//display car name and manufacturer name

console.log(`Car name is ${car.name} and manufacturer name is ${car.manufacturer}`);
console.log('--------------');


// check whether 'model' key is present or not if present display the value

'model' in car?console.log(`Model name is ${car.model}`):'not present'

console.log('--------------');

// add 'varient' key to the car object with values as 'Manual'

car['varient'] = ['Manual']
console.log(car);
console.log('--------------');

// update a new value "automatic" to the car varient

car['varient'].push('Automatic')
console.log(car);
console.log('--------------')


//create a new key "color" with values as "red", "blue" and "green"

car['color'] =['red','green','blue']
console.log(car);
