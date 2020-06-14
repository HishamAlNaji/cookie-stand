// ------------------------------ Seattle shop

var Seattle = {
    costumerMax: 65,
    costumerMin: 23,
    avgCostumer: 6.3,
    numCos: 0,
    numCookies: 0,
    hourlyCookies: [],
    sumCookies: 0,
    getcostumer: function (min, max) {
        this.numCos = generateRandomCostumerNum(min, max);
    },

    getCookies: function (numCos, AvgCookie) {
        this.numCookies = generatCookies(numCos, AvgCookie);
    },
    diplayingObject: function () {
        render(this, 'Seattle');

    },

}
Seattle.diplayingObject();




// List Of functions :

// To generate a random number of costumers
function generateRandomCostumerNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// To generate the number of cookies
function generatCookies(randomCust, AvgCookie) {
    return Math.floor(randomCust * AvgCookie);
}

// To generate the number of cookies per hour
function render(location, title) {

    var mainTag = document.getElementsByTagName('main')[0];
    var shopLocation = document.createElement('h2');
    shopLocation.textContent = title;
    mainTag.appendChild(shopLocation);
    var list = document.createElement('ul');
    mainTag.appendChild(list);
    var hourlyCookies;
    var i;
    for (i = 6; i < 20; i++) {
        var hour
        if (i < 12) {
            hour = i
            var listItem = document.createElement('li');
            list.appendChild(listItem);
            location.getcostumer(location.costumerMin, location.costumerMax);
            location.getCookies(location.numCos, location.avgCostumer);
            location.hourlyCookies[i - 6] = location.numCookies;
            listItem.textContent = hour + "am: " + location.hourlyCookies[i - 6] + " cookies"
        } else if (i > 12) {
            hour = i - 12
            var listItem = document.createElement('li');
            list.appendChild(listItem);
            location.getcostumer(location.costumerMin, location.costumerMax);
            location.getCookies(location.numCos, location.avgCostumer);
            location.hourlyCookies[i - 6] = location.numCookies;
            listItem.textContent = hour + "pm: " + location.hourlyCookies[i - 6] + " cookies"
        } else if (i = 12) {
            hour = i
            var listItem = document.createElement('li');
            list.appendChild(listItem);
            location.getcostumer(location.costumerMin, location.costumerMax);
            location.getCookies(location.numCos, location.avgCostumer);
            location.hourlyCookies[i - 6] = location.numCookies;
            listItem.textContent = hour + "pm: " + location.hourlyCookies[i - 6] + " cookies"

        }


    }

    // To generate the summation of cookies for all hours :

    for (var i = 0; i < location.hourlyCookies.length; i++) {
        location.sumCookies = location.sumCookies + location.hourlyCookies[i]
    }
    var listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent = "Total: " + location.sumCookies + " cookies";

}



