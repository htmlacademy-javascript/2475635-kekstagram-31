function checkLength (string, maxLength) {
  let result = (string.length <= maxLength) ? true : false;
  return result;
}

function checkIfPalindrom (string) {
  const noSpaceString = string.replaceAll(' ','');
  const normalisedString = noSpaceString.toUpperCase();
  let reversedString = '';
  for (let i = normalisedString.length - 1; i >= 0; i--) {
        reversedString += normalisedString[i];
    }

  let isPalindrom = (reversedString === normalisedString);

    return isPalindrom;
}

