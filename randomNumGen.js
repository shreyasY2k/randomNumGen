function randomNumGenerator(num) {
  var result = parseInt((num * num).toString().padStart(4, "0").slice(1, 3));

  return result;
}
randomNum = randomNumGenerator(new Date().getMilliseconds());
console.log(randomNum);
