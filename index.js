// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (arr, wanted)
{
  return arr.filter(function(driverName)
  { return driverName.toLowerCase() === wanted.toLowerCase(); }) ;
}

function fuzzyMatch (arr, letters)
{
  let letterLength = letters.length;
  return arr.filter(function(drivers){
    return arr.slice(0, letterLength) === letters
  })
}

