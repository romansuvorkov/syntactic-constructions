function findBy(attr, value) {
  return function (obj) {
    return obj[attr] === value;
  };
}

export default findBy;
