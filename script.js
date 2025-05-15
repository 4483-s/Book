let myLibrary = [];
const addButton = document.querySelector(".add");
const listSection = document.querySelector(".list");
//add-book button function
addButton.addEventListener("click", function () {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = +document.querySelector("#pages").value;
  const read = Boolean(document.querySelector("#read").value);
  //
  if (!title || !author || !pages) {
    alert("please fill the blanks");
    return;
  }
  addBookToLibrary(title, author, pages, read);
  showBookNumber();
  //
  const readCell = document.createElement("div");
  const rmCell = document.createElement("div");
  const i = myLibrary.length - 1;
  const aBook = document.createElement("tr");

  const nText = document.createElement("td");
  nText.classList.add("digit");
  const titleText = document.createElement("td");
  const authorText = document.createElement("td");
  const pagesText = document.createElement("td");
  const readText = document.createElement("button");
  const id = document.createElement("td");
  const rmBtn = document.createElement("button");
  readCell.append(readText);
  rmCell.append(rmBtn);
  //toggle reading status
  readText.addEventListener("click", function () {
    readText.textContent =
      readText.textContent === "Read" ? "Not Read" : "Read";
  });
  //
  rmBtn.textContent = "Remove";
  rmBtn.addEventListener("click", function () {
    aBook.remove();
    showBookNumber();
    myLibrary = myLibrary.filter((v) => v.id !== id.textContent);
    console.log(myLibrary);
  });
  //
  nText.textContent = i + 1;
  titleText.textContent = myLibrary[i].title;
  authorText.textContent = myLibrary[i].author;
  pagesText.textContent = myLibrary[i].pages;
  readText.textContent = myLibrary[i].read ? "Read" : "Not Read";
  id.textContent = myLibrary[i].id;
  id.setAttribute("class", "id");
  //

  aBook.append(nText, titleText, authorText, pagesText, readCell, id, rmCell);
  listSection.append(aBook);
  console.log(myLibrary);
});
//add-book function ends, book constructor starts
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "already read" : "not read yet"
    }`;
  };
  this.id = crypto.randomUUID();
}
//book constructor ends
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}
function showBookNumber() {
  const digits = document.querySelectorAll(".digit");

  digits.forEach((v, i) => (v.textContent = i + 1));
}
