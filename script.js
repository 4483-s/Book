const addButton = document.querySelector(".add");
addButton.addEventListener("click", function () {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  pages = +pages;
  addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);
});
const myLibrary = [];
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
