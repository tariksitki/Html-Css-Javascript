const hotel = {
    brand: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: {
        open: 8,
        close: 22,
      },
      fri: {
        open: 9,
        close: 21,
      },
      sat: {
        open: 10,
        close: 20,
      },
    },
  
    // book: function (obj) {
    // console.log(obj)
    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  };







  const {brand : hotelBrand} = hotel;


//   Bir object'in içinde bir çok property olabilir. Object içerisinden tek tek çağırmak yerine, en çok ihtiyacımız olanları belirleyip onları ayrı bir değişkene atamış oluyoruz.



// https://github.com/airbnb/javascript


// book method oldu

// obje tek sadece iki ismi olmuş oldu,

// function sum(...numbers){
//     let total = 0;
//    numbers.forEach(i => {
//     total += i;
//     });
//     return total;
// }

// console.log(sum(1,2,6,7,9));


function sum(...numbers) {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};
sum(1,2) // 3
sum(1,2,3,4,5) // 15



sum = 0;
for(let i = 0 ; i<arguments.length; i++){
sum += arguments[i];
return sum;}


function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}





function sum(...numbers){
    let total = 0;
   numbers.forEach(i => {
    total = !isNaN(i) ?total + i : total;
    });
    return total
}

console.log(sum(1,2,6, "Mesut",7,9));




function sum(...numbers){
    let total = 0;
   numbers.forEach(i => {
    if (isNaN(i)) continue;
    total += i;
    });
    return total;
}

console.log(sum(1,2,6,7,9));


result = (temperature === null) ? "ERROR" : temperature 