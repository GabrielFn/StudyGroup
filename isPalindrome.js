function revertString(word) {
  return word.split('').reverse().join('');
}

function isPalindrome(word) {
  if (word.length < 1) {
    return false;
  }

  const isImpar = word.length % 2;

  const wordWidth = Math.floor(word.length / 2);

  if (isImpar === 1) {
    const firstHalf = word.slice(0, wordWidth);
    const secondHalf = word.slice(wordWidth + 1, word.length);

    if (firstHalf.toLowerCase() === revertString(secondHalf).toLowerCase()) {
      return true;
    }
  } else {
    const firstHalf = word.slice(0, wordWidth);
    const secondHalf = word.slice(wordWidth, word.length);

    if (firstHalf.toLowerCase() === revertString(secondHalf).toLowerCase()) {
      return true;
    }
  }

  return false;
};
