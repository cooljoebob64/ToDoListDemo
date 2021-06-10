let addButton = document.querySelector("#addButton");
let toDoList = document.querySelector("#toDoList");
let inputField = document.querySelector("#inputField");
function addItem() {
  let newItem = document.createElement("li");
  newItem.classList.add("notDone");

  newItem.addEventListener("click", function () {
    console.log(this, " just got clicked!");

    setTimeout(
      function () {
        if (this.classList.contains("done")) {
          console.log(this);
          console.log("was deleted!!");
          this.remove();
        } else console.log("Deletion cancelled for ", this);
      }.bind(this),
      1000
    );

    if (this.classList.contains("notDone")) {
      this.classList.remove("notDone"),
        this.classList.add("done"),
        console.log(" is about to be deleted!"),
        this.classList.add("fading");
    } else {
      this.classList.remove("done"),
        this.classList.add("notDone"),
        this.classList.remove("fading");
    }
  });
  if (inputField.value != "") {
    newItem.innerText = inputField.value;
    toDoList.append(newItem);
    inputField.value = "";
  } else {
    console.log("No input in text field!");
  }
}
