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




