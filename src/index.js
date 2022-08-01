module.exports = function check(str, conf) {
  let arr = [];
  let obj = {};
  let rev = {};

  conf.forEach((el, i, array) => {
    obj[el[0]] = el[1];
  });

  conf.forEach((el, i, array) => {
    rev[el[1]] = el[0];
  });

  for (let i = 0; i < str.length; i++) {
    let last = arr[arr.length - 1];

    if (obj[str[i]] === rev[str[i]]) {
      arr.push(str[i]);

      if (arr.length > 1 && rev[str[i]] === last) {
        arr.pop();
        arr.pop();
      }
    } else {
      if (obj[str[i]]) {
        arr.push(str[i]);
      } else {
        if (rev[str[i]] === last) {
          arr.pop();
        } else {
          arr.push(str[i]);
        }
      }
    }
  }

  return arr.length === 0;
}