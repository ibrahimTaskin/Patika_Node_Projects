var yaricap = process.argv[2];

alanHesapla = (r) => {
  return console.log(`Yarıçapı ${r} olan dairenin alanı: ${r * r * 3}`);
};

alanHesapla(yaricap * 1);
