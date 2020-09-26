

//Write a function to check if a given positive number is divisible by 4 and 5
//the function returns '4', '5', '4 and 5' or 'none' depending  on the divisibility of the number

//samples
//input: 13, output: 'none'
//input: 20, output: '4 and 5'
//input: 10, output: '5'
export function divisible(value) {
	const dividers = [4, 5].filter(divider => value % divider === 0);

	if (dividers.length) {
		return dividers.join(" and ");
	}

	return "none";
}

//write a function that returns a copy of an array with each element of the original multiplied by 5

//sample input: [3, 11, 5], output: [15, 55, 25]
export function multipliedBy5(array) {
  return [...array].map(value => value*5);
}

//Write a function to convert a specified positive number to an array of digits

//sapmple input: 123, output [1, 2, 3]
export function digitize(val) {
  return (val + "").split("").map(val => parseInt(val, 10));
}

//Write a function to convert a csv string to an array of objects
//Property names are the first line of the csv string

//sapmple input:
//`a;b;c
//1;2;4
//4;5;6`
//output: [{a:'1', b:'2', c:'4'}, {a:'4', b:'5', c:'6'}]
export function csvToObjArray(csv) {
    let rows = csv.split("\n");
  let header = rows.shift().split(";");
  return rows.map(row => row.split(";").reduce((result, value, index) => {
      result[header[index]] = value;
      return result;
    }, {})
  );
}


//write a function that takes a numeric parameter (n) and returns a promise that resolves with the nth fibonacci number
//if n < 0 the promise rejects with an error message 

//samples 
//input: 0, output: Promise that resolves with 0
//input: 3, output: Promise that resolves with 2
//input: -11, output: Promise thet reject with an error message 'n has to be larger then -1'
export function fibonacci(n) {
	return new Promise((resolve, reject) => {
		if (n < 0) {
			reject("n has to be larger then -1");
			return;
		}

		if (n === 0) {
			resolve(0);
			return;
		}

		if (n === 1 || n === 2) {
			resolve(1);
			return;
		}

		fibonacci(n-1).then(n1 => {
			fibonacci(n-2).then(n2 => {
				resolve(n1 + n2);
			})
		})
	})
}
