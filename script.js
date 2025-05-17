const myLibrary = [];
const addButton = document.querySelector(".add");
const listSection = document.querySelector(".list");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "already read" : "not read yet"
  }`;
};
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}
function showBookNumber() {
  const digits = document.querySelectorAll(".digit");
  digits.forEach((v, i) => (v.textContent = i + 1));
}
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
  const aBook = document.createElement("tr");
  const readCell = document.createElement("div");
  const rmCell = document.createElement("div");
  const i = myLibrary.length - 1;
  const id = myLibrary[i].id;

  const nCell = document.createElement("td");
  nCell.classList.add("digit");
  const titleCell = document.createElement("td");
  const authorCell = document.createElement("td");
  const pagesCell = document.createElement("td");
  const readBtn = document.createElement("button");
  const idCell = document.createElement("td");
  const rmBtn = document.createElement("button");
  readCell.append(readBtn);
  rmCell.append(rmBtn);
  //toggle reading status
  readBtn.addEventListener("click", function () {});
  //
  rmBtn.textContent = "Remove";
  rmBtn.addEventListener("click", function () {
    aBook.remove();
    showBookNumber();
    myLibrary.splice(
      myLibrary.findIndex((v) => v.id === id),
      1
    );
    console.log(myLibrary);
  });
  // nCell.textContent = i + 1;
  titleCell.textContent = title;
  authorCell.textContent = author;
  pagesCell.textContent = pages;
  readBtn.textContent = read ? "Read" : "Not Read";
  idCell.textContent = id;
  idCell.classList.add("id");
  //

  aBook.append(
    nCell,
    titleCell,
    authorCell,
    pagesCell,
    readCell,
    idCell,
    rmCell
  );
  listSection.append(aBook);
  showBookNumber();
  console.log(myLibrary);
});
