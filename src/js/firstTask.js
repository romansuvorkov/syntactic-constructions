function stringToNumb(input) {
  try {
    const convertToNumb = parseInt(input, 10);
    if (isNaN(convertToNumb)) {
      throw new Error('Неправильный ввод. Допускаются только числа от 0 до 10');
    }
    return convertToNumb;
  } catch (e) {
    return e;
  }
}

export default stringToNumb;
