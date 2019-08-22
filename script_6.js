function decrypt(base) {


let chuncks = base.match(/.{1,3}/g);

chuncks.forEach((chunck, index) => {
	if ("UCU" === chunck || "UCC" === chunck || "UCA" === chunck || "UCG" === chunck  || "AGU" === chunck  || "AGC") 
		chuncks[index] = "Sérine";
	if ("CCU" === chunck || "CCC" === chunck || "CCA" === chunck || "CCG" === chunck)
		chuncks[index] = "Proline";
	if ("UUA" === chunck || "UUG" === chunck)
		chuncks[index] = "Leucine";
	if ("UUU" === chunck || "UUC" === chunck)
		chuncks[index] = "Phénylalanine";
	if ("CGU" === chunck || "CGC" === chunck || "CGA" === chunck || "CGG" === chunck || "AGA" === chunck || "AGG" === chunck) 
		chuncks[index] = "Arginine";
	if ("UAU" === chunck || "UAC" === chunck)
		chuncks[index]= "Tyrosine";
});

return chuncks.join("-")
};


console.log("Voici les acides aminés pour l'ARN CCGUCGUUGCGCUACAGC:")
console.log(decrypt("CCGUCGUUGCGCUACAGC"));

console.log("Voici les acides aminés pour l'ARN CCUCGCCGGUACUUCUCG:")
console.log(decrypt("CCUCGCCGGUACUUCUCG"));