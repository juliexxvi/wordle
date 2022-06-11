let letters = document.getElementsByClassName("letter");
// console.log(letters);
let keys = document.getElementsByClassName("key");
// console.log(keys);
let index = 0;
for (let keyElement of keys) {
  let key = keyElement.textContent;
  keyElement.addEventListener("click", () => {
    // console.log(letters[0]);
    // letters[0].textContent = key;

    switch (key) {
      case "enter":
        // only running when 5 letters are there
        break;

      case "del":
        // occur when user wants to delete a letter
        if (index > 0) {
          letters[index - 1].textContent = "";
          index--;
        }
        console.log(index);
        break;

      default:
        letters[index].textContent = key;
        console.log(index);
        index++;
        break;
    }
  });
}
