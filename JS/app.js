// ------------------------------ Constructor :
var Time = ['',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    'Daily Location Total'
];

var Cities = [];

function City(name, costumerMax, costumerMin, avgCostumer) {
    this.name = name
    this.costumerMax = costumerMax;
    this.costumerMin = costumerMin;
    this.avgCostumer = avgCostumer;
    this.numCos = 0;
    this.numCookies = 0;
    this.hourlyCookies = [];
    this.sumCookies = 0;
    Cities.push(this);
}

City.prototype.getcostumer = function(min, max) {
    this.numCos = generateRandomCostumerNum(min, max);
};

City.prototype.getCookies = function(numCos, AvgCookie) {
    this.numCookies = generatCookies(numCos, AvgCookie);
};


// ------------------------------ Reandering 

var table = document.createElement('table');

City.prototype.render = function() {
    var mainTag = document.getElementsByTagName('main')[0];
    mainTag.appendChild(table);
    var tr = document.createElement('tr')
    table.appendChild(tr)
    var th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = this.name;
    var i;
    for (i = 0; i < Time.length - 2; i++) {
        var td = document.createElement('td');
        tr.appendChild(td);
        this.getcostumer(this.costumerMin, this.costumerMax);
        this.getCookies(this.numCos, this.avgCostumer);
        this.hourlyCookies[i] = this.numCookies;
        td.textContent = this.hourlyCookies[i] + " cookies"
    }

    // To generate the summation of cookies for all hours :

    for (var i = 0; i < this.hourlyCookies.length; i++) {
        this.sumCookies = this.sumCookies + this.hourlyCookies[i]
    }
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.sumCookies + " cookies";

}

// To generate a random number of costumers
function generateRandomCostumerNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// To generate the number of cookies
function generatCookies(randomCust, AvgCookie) {
    return Math.floor(randomCust * AvgCookie);
}

// ------------------------------ header raw Function :

function headerRaw() {
    var tr = document.createElement('tr')
    table.appendChild(tr)
    for (var i = 0; i < Time.length; i++) {
        var th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = Time[i];
    }
}

// ------------------------------ Footer Raw Function :

function footerRaw() {

    var tr = document.createElement('tr')
    table.appendChild(tr)
    var th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = "Total";

    var allCookies = 0;
    for (var i = 0; i < 14; i++) {
        var sumHourlyCookies = 0;
        var td = document.createElement('td');
        for (var z = 0; z < Cities.length; z++) {
            sumHourlyCookies = sumHourlyCookies + Cities[z].hourlyCookies[i]
        }
        allCookies = allCookies + sumHourlyCookies
        td.textContent = sumHourlyCookies + " Cookies";
        tr.appendChild(td);
    }
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = allCookies + " cookies";
}


// ------------------------------ Form :

var newBranch = document.getElementById("branchForm");

newBranch.addEventListener("submit", addBranch);

function addBranch(event) {
    event.preventDefault()

    var branchName = event.target.cityName.value;
    var max = Number(event.target.maxCos.value);
    var min = Number(event.target.minCos.value);
    var avg = Number(event.target.avgCookies.value);

    var newBranch = new City(branchName, max, min, avg);

    document.getElementById("table");
    var tr = document.createElement('tr')
    table.deleteRow(table.rows.length - 1)

    newBranch.getcostumer(newBranch.costumerMax, newBranch.costumerMin)
    newBranch.getCookies(newBranch.numCos, newBranch.avgCostumer)
    newBranch.render(newBranch);

    footerRaw();
}


// ------------------------------ All shops Renderings :

headerRaw();

var Seattle = new City('Seattle', 65, 23, 6.3);
var Tikyo = new City('Tikyo', 24, 3, 1.2);
var Dubai = new City('Dubai', 38, 20, 3.7);
var Paris = new City('Paris', 38, 11, 2.3);
var Lima = new City('Lima', 16, 2, 4.6);

console.log(Cities)
for (var i = 0; i < Cities.length; i++) {
    Cities[i].getcostumer(Cities[i].costumerMax, Cities[i].costumerMin)
    Cities[i].getCookies(Cities[i].numCos, Cities[i].avgCostumer)
    Cities[i].render(Cities[i])

}

footerRaw();

console.log(Cities[0].hourlyCookies.length)