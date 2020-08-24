// Business logic Destination
function Destinations() {
  this.cities = [];
  this.currentId = 0;
} 

Destinations.prototype.addCity = function(city) {
  city.id = this.assignId();
  this.cities.push(city);
}

Destinations.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Destinations.prototype.findCity = function(id) {
  for (let i = 0; i < this.cities.length; i++) {
      // if (cities[i]) {
      if (this.cities[i].id == id) {
        return this.cities[i];
      }
    //  }
  };
  return false;
}

// business logic worldCities
function WorldCities(landmark, timeOfYear, tagLine) {
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.tagline = tagLine;
}

WorldCities.prototype.description = function() {
  return this.landmark + " " + this.timeOfYear + " " + this.tagLine;
}

// let destinations = new Destinations(); 
// let dubaiP = new WorldCities("Burj Khalifa", "2015", "Make it Happen");
// console.log(dubaiP.landmark); // would be "Burj Khalifa"
// let jacmel = new WorldCities("Bassin Bleu", "2016", "City of light");
// let paris = new WorldCities("Eiffel Tower", "2017", "Fluctuat nec mergitur")
// destinations.addCity(dubai);
// destinations.addCity(jacmel);
// destinations.addCity(paris);
// let destinations = new Destinations(); 

// UI Logic


$(document).ready(function() {
  let destinations = new Destinations(); 
$("#dubai").click(function(event) {
  event.preventDefault();
  let dubaiP = new WorldCities("Burj Khalifa", "2015", "Make it Happen");
  (destinations.addCity(dubaiP))
  $(".dubai").show();
  // Example of displaying Object property: dubaiP.landmark
  // Example of Template Literals to Generate HTML:
  $(`.${dubai}`).text(`
    <li>Landmark: ${dubaiP.landmark}</li>
    <li>Time of Year: ${dubaiP.timeOfYear}</li>
    <p>${dubaiP.tagline}</p>
  `);
  // Example without template literals:
  $(".dubai").append("<li>Landmark: " + dubaiP.landmark + "</li>");
  })
})


