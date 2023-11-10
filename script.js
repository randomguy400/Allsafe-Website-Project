/* Auto-changing images */

const landing_images = document.getElementsByClassName("landing-images")
const loadimage = landing_images[0];
const loadedimage = landing_images[1];
const loadingbar = document.getElementsByClassName("image-load-progress-animation")[0]
const directory = "./img/landing-images/"
const images = [
  [
    "1.jpg", 
    "Mr Robot sitting at a computer desk with an Allsafe Cybersecurity desktop background, with his back to the computer screens and Elliot, who is staring at him"
  ],
  [
    "2.jpg",
    "Ollie Parker sitting at a computer desk at Allsafe Cybersecurity, with an ejected disk in the disk reader of the computer"
  ],
  [
    "3.jpg",
    "The office environment at Allsafe Cybersecurity, Elliot stands waiting"
  ],
  [
    "4.jpg",
    "Scott Knowles looks on in horror, as the people on New York watch him burn 5.9 million dollars"
  ],
  [
    "5.jpg",
    "Gideon Goddard, the CEO of Allsafe, at a table with Terry Colby, Philip Price (the CEO of E-Corp) and Tyrell Wellick"
  ]
]

let index = -1;
/* setTimeout(carousel, 20000); */
carousel();

function carousel() {
  index = (index + 1) % images.length
  loadingbar.classList.remove('image-load-progress-animation');
  void loadingbar.offsetWidth;
  loadingbar.classList.add('image-load-progress-animation');
  loadimage.style.display = ""
  loadingbar.style.display = ""
  loadedimage.style = `background: url(${directory + images[index][0]}) center/cover no-repeat; display:none;`
  loadedimage.title = images[index][1]
  setTimeout(loadnewimage, 2000)
}

function loadnewimage() {
  loadedimage.style.display = ""
  loadimage.style = `background: url(${directory + images[(index + 1) % images.length][0]}) center/cover no-repeat;`
  loadimage.style.display = "none"
  setTimeout(carousel, 18000)
}

/* */

/* Auto-changing protection examples */

let protection_examples = ["energy companies", "e-corp", "conglomerates", "banks", "corporations", "consumer finance", "healthcare"]
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  .map(item => item + " ");

  console.log(protection_examples)

const speed = 50;
let i = 0
let typing = true
let next_word = 0
let wait = 10000

function typeWriter() {
  console.log("run function")
  if (i <= protection_examples[next_word].length && typing) {
    document.getElementById("protection-examples").innerHTML += protection_examples[next_word].charAt(i);
/*     console.log(document.getElementById("protection-examples").innerHTML)
    console.log(i)
    console.log(protection_examples[next_word].length)
    console.log(typing)
    console.log("Next word:" + next_word) */
    i++;
    // console.log("i: " + i)
    if (protection_examples[next_word].length < i) {
      typing = false
      setTimeout(typeWriter, (wait + (protection_examples[next_word].length > 5 ? (protection_examples[next_word].length * 50) : 1)))
    }
    else setTimeout(typeWriter, speed);
  }

  else if ((i > 1/* || i > protection_examples[next_word].length*/) && typing === false) {
    document.getElementById("protection-examples").innerHTML = document.getElementById("protection-examples").innerHTML.slice(0, -1)
/*     console.log(document.getElementById("protection-examples").innerHTML)
    console.log(i)
    console.log(protection_examples[next_word].length)
    console.log(typing)
    console.log("Next word:" + next_word) */
    i--;
/*     console.log("i: " + i)
    if (i == 0) {
      typing = true
      next_word != protection_examples.length + 1 ? next_word += 1 : next_word = 0
    }; */
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

/* */

/* Adjust content margin, to allow for navbar resizing */

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the navbar element
//   const navbar = document.getElementById("navbar")

//   // Get the content element
//   const content = document.getElementsByClassName('page-content')[0];
//   const landing_page = document.getElementById('landing-lage');

//   function adjust() {
//     /* Adjust the padding-top based on the navbar's height */
//     const navbarHeight = navbar.offsetHeight;
//     content.style.marginTop = navbarHeight + 'px';
//   }

//   // Call the adjust function when the page loads and on window resize
//   window.addEventListener('load', adjust);
//   window.addEventListener('resize', adjust);
// })
/* */