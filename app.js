const words = ["heart", "goose", "lunch", "porky", "build", "sante"];
const correctWord = words[Math.round(Math.random() * (words.length - 1))];

const enter = (userWord) => {
  if (!words.includes(userWord)) {
    console.log("Sorry. Invalid word!");
  }
  if (userWord !== correctWord) {
    const userWordLetters = userWord.split("");
    const correctWordLetters = correctWord.split("");
    // console.log(userWordLetter);
    for (let i = 0; i < userWord.length; i++) {
      // console.log(userWordLetters[4]);
      // console.log(correctWordLetters[4]);
      if (!correctWordLetters.includes(userWordLetters[i])) {
        console.log(userWordLetters[i] + " is not correct");
        continue;
      }

      if (correctWordLetters[i] == userWordLetters[i]) {
        console.log(userWordLetters[i] + " is correct");
        continue;
      }

      if (correctWordLetters[i] !== userWordLetters[i]) {
        console.log(
          userWordLetters[i] + " is correct but not in the right order"
        );
      }
    }
  }
  if (userWord === correctWord) {
    console.log("Bingo");
  }
};

enter("sante");
console.log(correctWord);
