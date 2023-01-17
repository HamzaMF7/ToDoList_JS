var input = document.querySelector(".txt-check");
var count = 0;
var btn = document.querySelector(".btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
});

btn.onclick = function () {
  function addElement() {
    // create a new div element
    const ch = document.createElement("input");
    const newDiv = document.createElement("div");
    const removeC = document.createElement("button");
    newDiv.classList.add("added");
    newDiv.setAttribute("id", `${count++}`);
    ch.setAttribute("type", "checkbox");
    ch.setAttribute("onchange", "lineth(this)");
    removeC.classList.add("rmv-btn");
    removeC.setAttribute("onclick", "remove(this)");
    // and give it some content
    const newContent = document.createTextNode(input.value);
    removeC.innerHTML = "remove";
    // add the text node to the newly created div
    newDiv.appendChild(ch);
    newDiv.appendChild(newContent);
    newDiv.appendChild(removeC);
    // add the newly created element and its content into the DOM
    const currentDiv = document.querySelector(".output");
    currentDiv.appendChild(newDiv);
    input.value = "";
  }
  addElement();
};

// to remove elements
function remove(cls) {
  var c = cls.parentElement.id;
  console.log(c);
  console.log(document.getElementById(c));
  document.getElementById(c).remove();
}
// to line trough elements

function lineth(e) {
  var i = e.parentElement.id;
  if (e.checked)
    document.getElementById(i).style = "text-decoration: line-through";
  else document.getElementById(i).style = "text-decoration: none";
}
