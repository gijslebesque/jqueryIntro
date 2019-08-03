// callback when DOM is ready

// window.onload = function() {
//   alert("bonjournou");
// };

$(document).ready(function() {
  console.log("DOM LOADED");
  //Querying the dom
  const btn = document.getElementById("change-color");
  const sameBtn = $("#change-color")[0];
  // document.querySelector("#change-color");

  //document.getElementsByClassName("class");

  // const squares = document.querySelectorAll(".square");
  // for (let i = 0; i < squares.length; i++) {
  //   const element = squares[i];
  //   element.addEventListener("click", function() {
  //     debugger;
  //   });
  // }

  //Event listeners

  $(".square").on("click", function() {
    $(this).toggleClass("circle");
  });

  const arrayOfSqaures = $(".flex-container").find(".square");
  //Walking the dom

  //toggle class method;
  //Using spread operator;
  //Animation;

  const firstSquare = document.getElementsByClassName("square")[0];
  // animate(firstSquare, 50, 10);

  $(".square").animate({ height: "50px", width: "50px" }, 10000);

  let someSquares = document.getElementsByClassName(".square");

  someSquares.map(element => console.log(element));

  // [...someSquares].map(element => {
  //   debugger;
  // });
});

function animate(element, duration, speed) {
  element.style.height = height + "px";
  const intervalId = setInterval(function() {
    if (height === duration) {
      clearInterval(intervalId);
    }
    height--;
    element.style.height = height + "px";
  }, speed);
}

//some info on bubbling https://javascript.info/bubbling-and-capturing
