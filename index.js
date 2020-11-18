document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  
  // ADD CODE HERE!
});

init();
// grabbing ul
const ul = document.querySelector("#moves-container")
// adding EL whole doc for keydowns 
document.addEventListener("keydown", function(e) {
  // creating an li elements
  let li = document.createElement("li")  
  // adding textContent based off keydown
  switch(e.key) {
    case "ArrowLeft": 
      li.textContent = "left"
      break;
    case "ArrowRight":
      li.textContent = "right"
      break;
    case "ArrowUp": 
      li.textContent = "up"
      break;
    case "ArrowDown": 
      li.textContent = "down"
      break;
      
    }
    //appending li to the ul
    ul.append(li);
    // added EL to li for a click to remove move
    li.addEventListener("click", function(e){
      e.target.remove()
    })

})
// grabs btn
const btn = document.querySelector("#move-button");
// add EL to button, click, callback Func moves every .5 seconds
btn.addEventListener("click", movesClangEveryHalfSecond)

// func to move clang .5 seconds
function movesClangEveryHalfSecond() {
  // saving into variable setInterval func
  const interval = setInterval(function() {
    // takes in func and time stamp
    if (ul.firstChild) {
    const direction = ul.firstChild.textContent
    move(direction)
    ul.firstChild.remove()
    } else {
      clearInterval(interval);
    }
  }, 500) 

}
// if li === null     stopClang


// function myFunction() {
//   setInterval(function(){ alert("Hello"); }, 3000);
// }

// function myFunction() {
//   setTimeout(function(){ alert("Hello"); }, 3000);
// }