//Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {

    return (base * height) / 2;
	
}

console.log(triArea(6,2));

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
	let min = Infinity;
	let max = -Infinity;
	newArr = []
	
	for(let number of arr){
		if(number > max)
			max = number
			
		if(number < min)
			min = number
			}
		
		newArr.push(min)
		newArr.push(max)
	
	return newArr;
}