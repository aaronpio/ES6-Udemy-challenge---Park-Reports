

 // ES6 Udemy Coding Challenge

 /* You work for a small town with 3 parks and 4 streets. Make reports on the following using ES6 features:
 1. tree density of each park in the town (# of trees/park)
 2. Avg age of of the parks (total age/# of parks)
 3. Parks with > 1000 trees
 4. Total and avg length of streets
 5. Size classification of all streets: tiny/small/normal/big/huge. Defualts to normal for no inputs.

 Print report to console.
 */


class Element {
    constructor (name, build) {
        this.name = name;
        this.build = build;
    }
};

class park extends Element {
    constructor(name, build, area, trees) {
        super(name, build);
        this.area = area; //km2
        this.trees = trees;
    }
    treeDensity() {
        const density = Math.round(this.trees / this.area);
        console.log(`${this.name} has a tree density of ${density} trees/sq km.`);
    }
}

class street extends Element {
    constructor(name, build, length, size = 3) {
        super(name, build);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.build}, is a ${classification.get(this.size)} street`);
    }
}

const allParks = [
    new park('Green', 1987, 0.2, 215),
    new park('National', 1894, 2.9, 3541),
    new park('Oak', 1953, 0.4, 949)
];

const allStreets = [
    new street('Ocean', 1999, 1.1, 4),
    new street('Evergreen', 2000, 2.7, 2),
    new street('4th', 2015, 0.8),
    new street('Sunset', 1982, 2.5, 5)
];

function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, Math.round(sum / arr.length)];
}


function reportParks(p) {
    console.log('--------- PARKS REPORT ---------');

    //Density
    p.forEach(el => el.treeDensity());

    //Average Age
    const ages = p.map(el => new Date().getFullYear() - el.build);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks are an average of ${avgAge} years old.`);

    //Parks with > 1000 Trees
    const i = p.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has greater than 1000 trees`);

};

function reportStreets(s) {

    console.log('--------- PARKS REPORT ---------');

    //Total and average length of streets
        const [totalLength, avgLength] = calc(s.map(el => el.length));
        console.log(`Our ${s.length} streets have a total length of ${Math.round(totalLength)} km, with an avg of ${avgLength} km`);

    //classify sizes
    s.forEach(el => el.classifyStreet());

};


reportParks(allParks);
reportStreets(allStreets);




