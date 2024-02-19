function checkLength (string, maxLength) {
  result = (string.length <= maxLength) ? true : false;
  return result
}

function checkIfPalindrom (string) {
    let noSpaceString = string.replaceAll(' ','');
    let normalisedString = noSpaceString.toUpperCase();
    let reversedString = '';
    for (let i = normalisedString.length - 1; i >= 0; i--) {
        reversedString += normalisedString[i];
    }

    let isPalindrom = (reversedString === normalisedString);

    return isPalindrom;
}

