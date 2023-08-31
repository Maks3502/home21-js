const car = [
    { name: "Audi", price: 1000, madeIn: "Germani" },
    { name: "BMW", price: 4000, madeIn: "Germani" },
    { name: "Ferari", price: 120000, madeIn: "Itali" },
    { name: "Mercades", price: 1200, madeIn: "Germani" },
];

const filtrCar = car.filter((car) => car.price < 1500).filter((car) => car.madeIn === "Germani");

console.log(filtrCar);

// перебираючи методи масива :

// - викликаються тільки на масиві,

//  - перебирають кожен елемент цього масива,


// - приймає колбек і в цьому колбеку 