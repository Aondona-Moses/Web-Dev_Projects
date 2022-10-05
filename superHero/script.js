//IDs:
// compareHero
// pickRandomHero
// searcInp
// search
// searcHero1Inp
// searcHero2Inp
// randomAndSearch


const pickRandomHeroBtn = document.getElementById("pickRandomHero")
const searcInp = document.getElementById("searcInp")
const searchBtn = document.getElementById("search")
const searcHero1Inp = document.getElementById("searcHero1Inp")
const searcHero2Inp = document.getElementById("searcHero2Inp")
const compareHeroBtn = document.getElementById("compareHero")
const randomAndSearchEl = document.getElementById("randomAndSearch")



const SUPERHERO_TOKEN = '2692732104195132'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`

// Generate a random number/superhero ID
const randomNumberGenerator = () => {
	const numberOfHeros = 731
	const id = Math.floor(Math.random() * numberOfHeros) + 1
	return id
}

// Gets a random SuperHero based on the random ID
const getRandomHero = (id) => {
	fetch(`${BASE_URL}/${id}`)
		.then(response => response.json())
		.then(data => {
		const superHeroData = data
		displayHero(superHeroData)
	})
}


// Gets a SuperHro by searced Name
const searchHero = (name) => {
	fetch(`${BASE_URL}/search/${name}`)
		.then(response => response.json())
		.then(data => {
		const superHeroData = data.results[0]
		displayHero(superHeroData)
})
}


//const searchFunction = (name) => {
//	fetch(`${BASE_URL}/search/${name}`)
//		.then(response => response.json())
//		.then(data => {
//		const superHeroData = data.results[0]
//}
//			  
//const compareHeros = (hero1, hero2) => {
//	searchFunction(hero1)
//	
//}


// Display SuperHero details
const displayHero = (superHero) => {
	const name = superHero.name
	const imgUrl = superHero.image.url
	const powerStat = superHero.powerstats
	const stats = Object.keys(powerStat).map(stats => {
		return `<p class="mb-0">${stats.toUpperCase()}: ${powerStat[stats]}</p>`
	}).join('')
	
	const HTML = `<div class="card mb-3" style="max-width: 400px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${imgUrl}" class="img-fluid rounded-start" alt="hero image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${name.toUpperCase()}</h5>
        ${stats}
      </div>
    </div>
  </div>
</div>`
	
	randomAndSearchEl.innerHTML = HTML
}

//fetch(BASE_URL)
//	.then(response => response.json())
//	.then(data => console.log(data))


// randomly select a supero
pickRandomHeroBtn.addEventListener('click', () => {
	getRandomHero(randomNumberGenerator())}
)


// search for a superhero based on the typed name
searchBtn.addEventListener('click', () => {
	searchHero(searcInp.value)

})


// compare two superheros based the typed names
compareHeroBtn.addEventListener('click', () => {
	compareHeros()
})
