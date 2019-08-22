const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
let n = 0
books.forEach(book =>{
  if (book.rented > 0){
      console.log(`Le livre a l'index n°${n} à déja été emprunté au moins une fois.`)
      n += 1
} else {
    console.log(`Le livre a l'index n°${n} n'a jamais emprunté.`)
    n += 1
  }
})

console.log("Quel est livre le plus emprunté ?")
let nbMaxRentedBook = Math.max.apply(Math, books.map(function(o) { return o.rented; }))
books.forEach(book => {
  if (book.rented === nbMaxRentedBook){
      console.log(`${book.title} est le livre le plus emprunté.`)
    }
})


console.log("Quel est le livre le moins emprunté ?")
let nbMinRentedBook = Math.min.apply(Math, books.map(function(o) { return o.rented; }))
books.forEach(book => {
  if (book.rented === nbMinRentedBook){
      console.log(`${book.title} est le livre le moins emprunté.`)
    }
})


console.log("Trouve le livre avec l'ID: 873495 ;")
let bookSearched = (books.find( book => book.id === 873495)).title;
console.log(`Le livre correspondant à l'ID: ${bookSearched}`)

console.log("Supprime le livre avec l'ID: 133712 ;")
booksArrayAfterDelete = []

books.forEach(book => {
  if (book.id !== 133712){
    booksArrayAfterDelete.push(book)
  } 
})
console.log(booksArrayAfterDelete)

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
booksArrayAfterDelete.sort(function(a, b) {
  return a.title.localeCompare(b.title);
});

console.log(booksArrayAfterDelete)

