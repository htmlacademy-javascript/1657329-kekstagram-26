// данная функция взята с сайта: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && max > 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 'Введите положительные значение, где max > min!';
};

getRandomIntInclusive(0, 200);

const validateMaxLengthMessage = (message, maxLength) => message.length <= maxLength;

validateMaxLengthMessage('Hellow!', 50);
