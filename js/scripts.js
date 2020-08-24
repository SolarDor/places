// Business logic Destination
function Destinations() {
  this.cities = [];
  this.currentId = 0;
} 

Destinations.prototype.addCity = function(city) {
  cities.id = this.assignId();
  this.cities.push(city);
}

Destinations.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Destinations.prototype.findCity = function(id) {
  for (let i = 0; i < this.cities.length; i++) {
    if (cities[i]) {
      if (this.cities[i].id == id) {
        return this.cities[i];
      }
    }
  };
  return false;
}

// business logic  worldCities
function WorldCities(landmark, timeOfYeArray, tagline) {
  this.landmark = landmark;
  this.timeOfYeArray = timeOfYeArray;
  this.tagline = tagline;
}


let destinations = new Destinations();
let dubai = new WorldCities("Burj Khalifa", "2015", "Make it Happen");
let jacmel = new WorldCities("Bassin Blue", "2016", "City of light");
let paris = new WorldCities("Eiffel Tower", "2017", "Fluctuat nec mergitur")
destinations.addCity(dubai);
destinations.addCity(jacmel);
destinations.addCity(paris);
