const palindromes = function (str) {
  const formattedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let origStr = formattedStr.split("").join("");
  let reversedStr = formattedStr.split("").reverse().join("");

  return origStr === reversedStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
