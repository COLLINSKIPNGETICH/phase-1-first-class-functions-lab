// returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// fareDoubler
const fareDoubler = createFareMultiplier(2);

// fareTripler
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers
const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};

const driversArray = ["driver1", "driver2", "driver3", "driver4"];

console.log(returnFirstTwoDrivers(driversArray)); 
console.log(returnLastTwoDrivers(driversArray)); 
console.log(selectingDrivers[0](driversArray)); 
console.log(selectingDrivers[1](driversArray)); 

// Use createFareMultiplier, fareDoubler, and fareTripler
const originalFare = 10;
const fareDoubled = fareDoubler(originalFare);
const fareTripled = fareTripler(originalFare);

console.log(fareDoubled); 
console.log(fareTripled); 
console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers)); 

