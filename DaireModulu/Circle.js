const circleArea = (r) =>
  console.log(`Yarıçapı ${r} olan dairenin alanı ${r * r * 3}`);
const circleCircumference = (r) =>
  console.log(`Yarıçapı ${r} olan dairenin çevresi ${2 * 3 * r}`);

module.exports = {
  circleArea,
  circleCircumference,
};
