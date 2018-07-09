/*
You're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:

1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

// Declare parent class with common member variables
class TownAdministration {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

// Declare Park class. Inherits from TownAdministration
class Park extends TownAdministration {
    constructor(name, buildYear, area, numTrees) {
        // Call the base class's constructor for the common member variables
        super(name, buildYear);
        
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    //Prints tree density for the current object
    treeDensity() {
        // Calculate density of the park
        const density = Math.round(this.numTrees / this.area);
        document.writeln(`${this.name} has a tree density of ${density} trees per square km. <br>`);
    }
}

// Declare Street class. Inherits from TownAdministration
class Street extends TownAdministration {
    // default size classification - normal (tiny/small/normal/big/huge)
    constructor(name, buildYear, length, size = 3) {
        
        // Call the base class's constructor for the common member variables
        super(name, buildYear);

        this.length = length;
        this.size = size;
    }

    // Prints the size class for the current object.
    classifyStreet() {
        // Key value pair for the size classificatin
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        document.writeln(`${this.name}, built in ${this.buildYear}, is a <strong> ${classification.get(this.size)}</strong>  street. <br>`);
    }
}

// Common method to caluclate sum and average of aray elements passed
function calc(arr) {
    // Loops through the  array and adds the current element value to the prev.
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
    
}

function reportParks(parkArr) {
    document.writeln('<b>-----PARKS REPORT-----</b><br>');
   
    // 1. Tree density of each park in the town (forumla: number of trees/park area)
    parkArr.forEach(el => {
        el.treeDensity();
    });

    // 2. Average age of each town's park (forumla: sum of all ages/number of parks)
    // Declare an array with the ages of all the parks
    const ageArr = parkArr.map(el => (new Date().getFullYear())- el.buildYear);
    const [totalAge,averageAge]=calc(ageArr);
    document.writeln(`<br> Our ${ageArr.length} parks have an average age of <b>${Math.round(averageAge)}</b>`);

    // 3. The name of the park that has more than 1000 trees
    //Loops through the array and prints the park with over 1000 trees
    document.writeln("<br>Parks that have over 1000 trees: <br>");
    parkArr.forEach(el => {
        if (el.numTrees >= 1000)
            document.writeln(`-- ${el.name} <br>`);
    });
}1

function reportStreets(streetArr) {
    document.writeln(' <br> <b>-----STREETS REPORT----- </b><br>');

    // 4. Total and average length of the town's streets
    const [totalLength,avgLength]=calc(streetArr.map(el=>el.length))
    document.writeln(`Our ${streetArr.length} streets have a total length of ${Math.round(totalLength)} km,
     with an average of ${Math.round(avgLength)} km. <br>`);

    // 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
    streetArr.forEach(el => el.classifyStreet());    
}

// Declare array of new park objects 
const allParks = [new Park('Jells Park', 1894, 4.5, 2715),
                 new Park('Glen Reserve', 1987, 2.1, 1298),
                 new Park('Brandon Park', 1973, 1.1, 149)];

// Declare array of new street objects 
const allStreets = [new Street('Gold View Avenue', 1999, 1.1, 4),
                   new Street('Lum Road', 2008, 2.7, 2),
                   new Street('View Mount Road', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];

reportParks(allParks);
reportStreets(allStreets);