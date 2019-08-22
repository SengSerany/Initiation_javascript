userInput = prompt("Que veux tu dire au bot?");

if (userInput.match(/[?]/g)) {
	console.log("Ouais, ouais...")

} else if (userInput.match(/^[^a-z]+$/)) {
	console.log("Pwah, calme-toi...")

} else if (userInput.match(/fortnite/gi)) {
	console.log("On s'fait une partie soum-soum ?")

} else if (userInput === "") {
	console.log("T'es en PLS?")

} else {
	console.log("Balek!")
};
