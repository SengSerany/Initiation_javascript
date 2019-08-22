let nbEtage = prompt("Combien d'étage veux-tu a ta pyramide ?");
let space = nbEtage - 1;
let	air = " ";
let stone = "#"

for (let etage = 1; etage <= nbEtage; etage++){
	console.log( air.repeat(space) + stone.repeat(etage))
	space -= 1
}