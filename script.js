const books = [
  {
    title: "Endurance: Shackleton's Incredible Voyage",
    author: "Alfred Lansing",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51R900QX5BL._SX294_BO1,204,203,200_.jpg",
  },
  {
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cover_%28Hound_of_Baskervilles%2C_1902%29.jpg/571px-Cover_%28Hound_of_Baskervilles%2C_1902%29.jpg",
  },
  {
    title:
      "The Millionaire Next Door: The Surprising Secrets of America's Wealthy",
    author: "Thomas Stanley, William Danko",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71dpI4OARxS.jpg",
  },
  {
    title: "Flags of Our Fathers",
    author: "James Bradley",
    coverUrl: "https://m.media-amazon.com/images/I/51yfd86hYLL.jpg",
  },
  {
    title: "Around the World in Eighty Days",
    author: "Jules Verne",
    coverUrl:
      "https://m.media-amazon.com/images/I/61QnzNzI9fS._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1543897827i/43097201.jpg",
  },
];

const booksContainer = document.getElementById("books_container");
const submitBookButton = document.getElementById('bookEntrySubmit');

const setBooksList = (arr) => {
  booksContainer.innerHTML = arr.map(
    ({ title, author, coverUrl }) =>
      `
      <div class="book_description">
        <img
          src="${coverUrl}"
          alt="${title} cover image"
          class="book_cover"
        />
        <div>${title}</div>
        <div>${author}</div>
      </div>
  `
  ).join("");
};

document.addEventListener("DOMContentLoaded", () => {
  setBooksList(books);
});

submitBookButton.addEventListener('submit', () => {
  const book = {
    title: "test",
    author: "test",
    coverUrl: "https://m.media-amazon.com/images/I/61QnzNzI9fS._AC_UF1000,1000_QL80_.jpg"
  };

  books.push(book);

  setBooksList(books);
});
