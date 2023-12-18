const inputEl = document.querySelector(".input");

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody()
function updateBody() {
  if (inputEl.checked) {
    document.body.style.backgroundColor = "black";
  } else {
    let random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = random;
  }
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
