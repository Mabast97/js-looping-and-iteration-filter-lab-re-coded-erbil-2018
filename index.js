function findMatching (arr, wanted)
{
  return arr.filter(function(driverName)
  { return driverName.toLowerCase() === wanted.toLowerCase(); }) ;
}

function fuzzyMatch (arr, letters)
{
  let letterLength = letters.length;
  return arr.filter(function(drivers){
    return drivers.slice(0, letterLength) === letters
  })
}

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(arr, name)
{
  arr.filter(function(items){
    return items.name.toLowerCase() === name;
  });
}



