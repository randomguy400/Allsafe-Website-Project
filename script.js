/*Auto-changing images */

let index = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) x[i].style.display = "none";
  index++;
  if (index > x.length) index = 1;
  x[index-1].style.display = "block";
  setTimeout(carousel, 20000);
}


/*Auto-changing protection examples */

let protection_examples = ["energy companies", "e-corp", "conglomerates", "banks", "corporations", "consumer finance", "healthcare"]
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const speed = 50;
let i = 0
let typing = true
let next_word = 0
let wait = 5500

function typeWriter() {
  console.log("run function")
  if (i <= protection_examples[next_word].length && typing) {
    document.getElementById("protection-examples").innerHTML += protection_examples[next_word].charAt(i);
    console.log(document.getElementById("protection-examples").innerHTML)
    console.log(i)
    console.log(protection_examples[next_word].length)
    console.log(typing)
    console.log("Next word:" + next_word)
    i++;
    console.log("i: " + i)
    if (protection_examples[next_word].length < i) {
      typing = false
      setTimeout(typeWriter, (wait + (protection_examples[next_word].length > 5 ? (protection_examples[next_word].length * 50) : 1)))
    }
    else setTimeout(typeWriter, speed);
  }

  else if ((i > 1/* || i > protection_examples[next_word].length*/) && typing === false) {
    document.getElementById("protection-examples").innerHTML = document.getElementById("protection-examples").innerHTML.slice(0, -1)
    console.log(document.getElementById("protection-examples").innerHTML)
    console.log(i)
    console.log(protection_examples[next_word].length)
    console.log(typing)
    console.log("Next word:" + next_word)
    i--;
    console.log("i: " + i)
    // if (i == 0) {
    //   typing = true
    //   next_word != protection_examples.length + 1 ? next_word += 1 : next_word = 0
    // };
    setTimeout(typeWriter, speed);
  }

  else {
    typing = true
    i = 0
    next_word != protection_examples.length - 1 ? next_word += 1 : next_word = 0
    setTimeout(typeWriter, speed);
  }
}

setInterval(typeWriter(), 8000);