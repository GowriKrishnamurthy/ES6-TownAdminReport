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

// Common member variables added in Base class
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        // Call the base class's constructor for the common member variables
        super(name, buildYear);
        
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    treeDensity() {
        // Calculate density of the park
        const density = Math.round(this.numTrees / this.area);
        document.writeln(`${this.name} has a tree density of ${density} trees per square km. <br>`);
    }
}
class Street extends Element {
    // default size classification - normal (tiny/small/normal/big/huge)
    constructor(name, buildYear, length, size =3) {
        
        // Call the base class's constructor for the common member variables
        super(name, buildYear);

        this.length = length;
        this.size = size;
    }

    classifyStreet () {
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

function reportParks(parkArr) {
    document.writeln('-----PARKS REPORT-----<br>');
   
    // 1. Tree density of each park in the town (forumla: number of trees/park area)
    parkArr.forEach(element => {
        element.treeDensity();
    });

    // 2. Average age of each town's park (forumla: sum of all ages/number of parks)

    // 3. The name of the park that has more than 1000 trees
    const parkWith1000Trees = parkArr.map(element => element.numTrees).findIndex(element => element >= 1000);
    if(parkWith1000Trees>=0){
        document.writeln('<br>-----Parks that have more than 1000 trees-----<br>');
        document.writeln(`${parkArr[parkWith1000Trees].name} <br>`);       
    }
}

function reportStreets(streetArr) {
    document.writeln(' <br> -----STREETS REPORT----- <br>');
    // 4. Total and average length of the town's streets

    // 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
    streetArr.forEach(element => element.classifyStreet());    
}

const allParks = [new Park('Jells Park', 1894, 4.5, 1715),
                 new Park('Glen Reserve', 1987, 1.1, 98),
                 new Park('Brandon Park', 1973, 2.4, 149)];

const allStreets = [new Street('Gold View Avenue', 1999, 1.1, 4),
                   new Street('Lum Road', 2008, 2.7, 2),
                   new Street('6th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];

reportParks(allParks);
reportStreets(allStreets);

