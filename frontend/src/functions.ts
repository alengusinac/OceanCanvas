export const validateCardNumber = (number: string) => {
  const regex = new RegExp('^[0-9]{13,19}$');
  if (!regex.test(number)) {
    return false;
  }

  return luhnCheck(number);
};

export const validateCardExpiry = (string: string) => {
  const regex = new RegExp('^(0[1-9]|1[0-2])\\/?([0-9]{4}|[0-9]{2})$');
  if (!regex.test(string)) {
    return false;
  }

  const month = parseInt(string.substring(0, 2), 10);
  let year = parseInt(string.substring(3, 7), 10);
  const expiryDate = new Date(year, month);

  if (String(year).length === 2) {
    year = parseInt(`20${year}`);
  }
  console.log(year);

  if (month < 1 || month > 12) {
    return false;
  }

  if (expiryDate < new Date()) {
    return false;
  }

  return true;
};

const luhnCheck = (val: string) => {
  let checksum = 0;
  let j = 1;

  for (let i = val.length - 1; i >= 0; i--) {
    let calc = 0;
    calc = Number(val.charAt(i)) * j;

    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    checksum = checksum + calc;

    if (j == 1) {
      j = 2;
    } else {
      j = 1;
    }
  }
  return checksum % 10 == 0;
};
