// ------------------------------ Constructor :
var Time = ['6am' +
    '7am' +
    '8am' +
    '9am' +
    '10am' +
    '11am' +
    '12pm' +
    '1pm' +
    '2pm' +
    '3pm' +
    '4pm' +
    '5pm' +
    '6pm' +
    '7pm'];
function City(costumerMax, costumerMin, avgCostumer) {
    this.costumerMax = costumerMax;
    this.costumerMin = costumerMin;
    this.avgCostumer = avgCostumer;
    this.numCos = 0;
    this.numCookies = 0;
    this.hourlyCookies = [];
    this.sumCookies = 0;
}

City.prototype.getcostumer = function (min, max) {
    this.numCos = generateRandomCostumerNum(min, max);
};

City.prototype.getCookies = function (numCos, AvgCookie) {
    this.numCookies = generatCookies(numCos, AvgCookie);
};

var table = document.createElement('table');

City.prototype.render = function (location, title) {
    var mainTag = document.getElementsByTagName('main')[0];
    var shopLocation = document.createElement('h2');
    mainTag.appendChild(shopLocation);
    mainTag.appendChild(table);
    var tr = document.createElement('tr')
    table.appendChild(tr)
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = title ;
    var hourlyCookies;
    var i;
    for (i = 6; i < 20; i++) {
        var hour
        if (i < 12) {
            var td = document.createElement('td');
            tr.appendChild(td);
            location.getcostumer(location.costumerMin, location.costumerMax);
            location.getCookies(location.numCos, location.avgCostumer);
            location.hourlyCookies[i - 6] = location.numCookies;
            td.textContent = location.hourlyCookies[i - 6] + " cookies"

        } else if (i > 12) {
            var td = document.createElement('td');
            tr.appendChild(td);
            location.getcostumer(location.costumerMin, location.costumerMax);
            location.getCookies(location.numCos, location.avgCostumer);
            location.hourlyCookies[i - 6] = location.numCookies;
            td.textContent = location.hourlyCookies[i - 6] + " cookies"
        } else if (i = 12) {
            var td = document.createElement('td');
            tr.appendChild(td);
            location.getcostumer(location.costumerMin, location.costumerMax);
            location.getCookies(location.numCos, location.avgCostumer);
            location.hourlyCookies[i - 6] = location.numCookies;
            td.textContent = location.hourlyCookies[i - 6] + " cookies"

        }


    }

    // To generate the summation of cookies for all hours :

    for (var i = 0; i < location.hourlyCookies.length; i++) {
        location.sumCookies = location.sumCookies + location.hourlyCookies[i]
    }
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = "Total: " + location.sumCookies + " cookies";

}

// To generate a random number of costumers
function generateRandomCostumerNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// To generate the number of cookies
function generatCookies(randomCust, AvgCookie) {
    return Math.floor(randomCust * AvgCookie);
}

// ------------------------------ All shops


var Seattle = new City(65, 23, 6.3);
var Tikyo = new City(24, 3, 1.2);
var Dubai = new City(38, 20, 3.7);
var Paris = new City(38, 11, 2.3);
var Lima = new City(16, 2, 4.6);

var Cities = [Seattle, Tikyo, Dubai, Paris, Lima , Total];
var strCities = ['Seattle', 'Tikyo', 'Dubai', 'Paris', 'Lima' , 'total']

for (var i = 0; i < Cities.length; i++) {
    Cities[i].getcostumer(Cities[i].costumerMax, Cities[i].costumerMin)
    Cities[i].getCookies(Cities[i].numCos, Cities[i].avgCostumer)
    Cities[i].render(Cities[i], strCities[i])

}

// ------------------------------ Hourly cookies
var sumHourlyCookies = 0;
for (var i = 0; i < 14; i++){

    for (var i = 0; i < 5; i++) {
        sumHourlyCookies = sumHourlyCookies + strCities.hourlyCookies[i]
    }
    console.log(sumHourlyCookies);

}
