module.exports = function getZerosCount(number, base) {
  var primeDividersMap = new Map();
  var dividersCountInTheNumberMap = new Map();
  var input = base;
  var zerosCount = 0;

  while (input != 1) {
    input = getMinimalPrimeDivider(input, primeDividersMap);
  }

  for (var key of primeDividersMap.keys()) {
    dividersCountInTheNumberMap.set(key, getCountOfDividersInNumber(number, key))
  }

  for (var key of dividersCountInTheNumberMap.keys()) {
    console.log(key);
    zerosCount = zerosCount > 0 && zerosCount < parseInt(dividersCountInTheNumberMap.get(key) / primeDividersMap.get(key))
      ? zerosCount : parseInt(dividersCountInTheNumberMap.get(key) / primeDividersMap.get(key));
  }

  return zerosCount;
}

function getMinimalPrimeDivider(number, primeDividersMap) {
  for (var i = 2; i < number + 1; i++) {
    if (number % i == 0) {
      if (primeDividersMap.get(i) == undefined) {
        primeDividersMap.set(i, 1);
      } else {
        primeDividersMap.set(i, primeDividersMap.get(i) + 1);
      }
      return number / i;
    }
  }
}

function getCountOfDividersInNumber(number, divider) {
  var input = number;
  var count = 0;
  while (input > 0) {
    input = parseInt(input / divider);
    count += input;
  }
  return count;
}