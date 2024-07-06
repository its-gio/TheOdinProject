const repeatString = function (str, count) {
  if (count < 0) return "ERROR";
  let concatedStr = "";
  while (count) {
    concatedStr += str;
    count--;
  }

  return concatedStr;
};

// Do not edit below this line
module.exports = repeatString;
