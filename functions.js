function binaryToDecimal(binario) {
  let decimal = 0;
  for (let i = 0; i < binario.length; i++) {
    decimal += Number(binario[i]) * Math.pow(2, binario.length - 1 - i);
  }
  return decimal;
}

function decimalToBinary(decimal) {
  if (decimal === 0) return "0";

  let binario = "";
  while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
  }
  return binario;
}

function convertBases(num, baseOrigin, baseFinal) {
  const number = parseInt(num, baseOrigin);
  return number.toString(baseFinal);
}


