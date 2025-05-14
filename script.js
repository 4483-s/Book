let myLibrary = [];
const addButton = document.querySelector(".add");
const listSection = document.querySelector(".list");
addButton.addEventListener("click", function () {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = +document.querySelector("#pages").value;
  const read = Boolean(document.querySelector("#read").value);
  //
  addBookToLibrary(title, author, pages, read);
  //
  const i = myLibrary.length - 1;
  const aBook = document.createElement("div");
  const titleText = document.createElement("p");
  const authorText = document.createElement("p");
  const pagesText = document.createElement("p");
  const readText = document.createElement("p");
  const id = document.createElement("p");

  const rmBtn = document.createElement("button");
  rmBtn.textContent = "Remove";
  rmBtn.addEventListener("click", function () {
    aBook.remove();
    myLibrary = myLibrary.filter((a, j) => j !== i);
  });
  //
  titleText.textContent = myLibrary[i].title;
  authorText.textContent = myLibrary[i].author;
  pagesText.textContent = myLibrary[i].pages;
  readText.textContent = myLibrary[i].read ? "Read" : "Not Read";
  id.textContent = myLibrary[i].id;
  aBook.append(titleText, authorText, pagesText, readText, id, rmBtn);
  listSection.append(aBook);
});
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
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}
