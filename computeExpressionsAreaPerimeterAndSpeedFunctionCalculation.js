function perimeterOfCircle(radius) {
	const pi = 3.14159265359;
	let perimeterOfCircle = 2 * radius * pi;
	console.log(`The Area of The Rectangle is ${perimeterOfCircle}`);
	return "";
	
}

function areaOfCircle(radius) {

	const pi = 3.14159265359;
	let areaOfCircle = radius * radius * pi;
	console.log(`The Area of The Rectangle is ${areaOfCircle}`);
	return "";
	
}

function perimeterOfRectangle (width,height) {

	console.log(`The Perimeter of The Rectangle is ${2 * (width + height)}`);
	return "";

}

function areaOfRectangle(width,height) {

	console.log(`The Area of The Rectangle is ${width * height}`);
	return "";

}

function speedInMilesPerHour (distanceInKilometer,timeInMinutes,timeInSeconds) {

	let distanceInMiles = distanceInKilometer /1.6;
	let time = (timeInMinutes/60) + timeInSeconds/(60*60);
	console.log(`The Speed in Miles Per Hour is ${distanceInMiles / time} Miles Per Hour`);
	return "";
}

perimeterOfCircle(5.5);
areaOfCircle(5.5);
perimeterOfRectangle (4.5,7.9);
areaOfRectangle(4.5,7.9);
speedInMilesPerHour (14,45,30);


