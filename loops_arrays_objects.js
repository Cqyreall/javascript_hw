var sports = ['football', 'tennis', 'rugby'];

// var number_of_elements = sports.length;
// console.log("number of elements:", number_of_elements)

// var firstSport = sports[0]
// console.log("first sport:", firstSport)

sports.push('curling');
sports.push('snooker');
sports.push('darts');
// console.log('Sports:', sports);

// var removed_element = sports.pop();
// console.log('Sports:', sports);
// console.log(removed_element)

// var removedSport = sports.shift()
// console.log('Sports:', sports);
// sports.unshift('basketball')
// console.log(sports)

// var removedSport = sports.splice(3, 1)
// console.log(sports)
// console.log(removedSport)

// for (var currentSport of sports){
//     var upperCase = currentSport.toUpperCase();
//     console.log(upperCase)
// }

// for ( initialise counter, condition, increment counter)

// for (var i= 0; i < sports.length; i++) {
//     var currentSport = sports[i]
//     var upperCase = currentSport.toUpperCase();
//     console.log(upperCase) 
// }

var movie = {
    title: "Its a Wonderful Life",
    year: 1946,
    language: "Spanish"
};

movie.cast = ['James Stewart', 'Donna Reed'];
movie.language = 'English';
movie.subtitle_language = 'German';

// delete movie.year;

movie.ratings = {
    critic: 94,
    audience: 95
}

var audienceRating = movie.ratings.audience

console.log('Audience Rating:', audienceRating);

// for ... in is for objects
// for ... of is for arrays

for (var key in movie){
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
    
}

var keys = Object.keys(movie);
console.log("Keys:", keys)