let form = document.getElementById("form");
let grid = document.getElementById("play-table");

form.addEventListener("submit", (e) =>{

  e.preventDefault();

  document.getElementById("play-table").style.display = "flex";
  
  for (let i = 0; i < 100; i++) {

    const newSquare = createGridSquare("div", "square");

    counter = i + 1;

    const content = document.createTextNode(counter);
  
    newSquare.append(content);

    newSquare.addEventListener("click", function () {

      this.classList.add("clicked");
      value = this.innerHTML;
      console.log(value);

    });

    grid.append(newSquare);

  }

 

})





// FUNZIONI

function createGridSquare(tagType, classToAdd) {

  const newElement = document.createElement(tagType);
  newElement.classList.add(classToAdd);

  return newElement;

}

function changeBackgroundAndStampLog() {

  newSquare.syle.backgroundColor = "blue"

}

