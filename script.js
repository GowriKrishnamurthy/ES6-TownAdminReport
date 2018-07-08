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
    constructor(name, buildyear) {
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
}
class Street extends Element {
    // default size classification - normal (tiny/small/normal/big/huge)
    constructor(name, buildYear, length, size = 'normal') {
        // Call the base class's constructor for the common member variables
        super(name, buildYear);

        this.length = length;
        this.size = size;
    }
}

function reportParks(p) {
    document.writeln('-----PARKS REPORT-----\n');
}

function reportStreets(s) {
    document.writeln('-----STREETS REPORT-----');
}

const allParks = [];
const allStreets = [];

reportParks(allParks);
reportStreets(allStreets);

