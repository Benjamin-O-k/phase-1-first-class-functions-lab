// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//console.log(selectingDrivers[0])
function createFareMultiplier(fare){
    return function(fare){
        return fare * fare;
    }
}

function fareDoubler (fare){
    createFareMultiplier(fare)
    return fare * 2;
}

function fareTripler(fare){
    createFareMultiplier(fare)
    return fare* 3;
}

const selectDifferentDrivers = (drivers, selector) => {
    return selector(drivers)
};

//console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
