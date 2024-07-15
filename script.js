//variables
let scorehome = 0;
let scoreguest = 0,
  foulhome = 0,
  foulguest = 0,
  count = 0;

//making displays content variables
let home = document.getElementById("HomeScoreBox");
let guest = document.getElementById("GuestScoreBox");
//this makes increment buttons
let divs = document.querySelectorAll(".button-container"); //it will have first element left,2nd foul right

divs.forEach((div) => {
  let buttons = div.querySelectorAll("button"); //array of buttons in that container
  console.log(divs);

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let selected = event.target.id; //that button will be in variable 'selected' that was clicked
      let parentContainerId = event.target.parentElement.id;

      console.log(`Button with ID '${selected}' was clicked.`);
      console.log(scoreguest);
      if (parentContainerId === "score-left") {
        console.log(`i am in score-left`);

        //it will check that button is of container with id score-left
        switch (selected) {
          case "Homeone":
            scorehome += 1;
            break;
          case "Hometwo":
            scorehome += 2;

            break;
          case "Homethree":
            scorehome += 3;

            break;

          default:
            break;
        }
        home.innerText = scorehome;
      } else if (parentContainerId === "score-right") {
        console.log(`i am in score-right`);
        //it will check that button is of container with id score-right
        switch (selected) {
          case "guestone":
            scoreguest += 1;
            break;
          case "guesttwo":
            scoreguest += 2;

            break;
          case "guestthree":
            scoreguest += 3;

            break;

          default:
            break;
        }
        guest.innerText = scoreguest;
      }
    });
  });
});

// //this makes displayed boxes
// let boxlevel = document.querySelectorAll(".boxLevel");

// boxlevel.forEach((div) => {
//   let box = div.querySelectorAll(".displayBox"); //array
// });

let foulhomeButton = document.getElementById("foulhome");
let foulguestButton = document.getElementById("foulguest");

foulhomeButton.addEventListener("click", () => {
  ++foulhome;
  document.getElementById("HomeFoulBox").innerText = foulhome;
});
foulguestButton.addEventListener("click", () => {
  ++foulguest;
  document.getElementById("GuestFoulBox").innerText = foulguest;
});

let newButton = document.getElementById("newGame");
newButton.addEventListener("click", () => {
  [scorehome, scoreguest, foulhome, foulguest, count] = [0, 0, 0, 0, 0];
  document.getElementById("HomeFoulBox").innerText = foulhome;
  document.getElementById("GuestFoulBox").innerText = foulguest;
  home.innerText = scorehome;
  guest.innerText = scoreguest;
  counterBox.innerText = `${minIncrement}:${count}`;
  console.log(minIncrement)
});

//COUNTER
let counterBox = document.getElementById("counterBox");
let minIncrement = 0;
setInterval(() => {
  ++count;
  if (count / 60 === minIncrement + 1) {
    ++minIncrement;
    count = 0;
  }
  counterBox.innerText = `${minIncrement}:${count}`;
}, 1000);
