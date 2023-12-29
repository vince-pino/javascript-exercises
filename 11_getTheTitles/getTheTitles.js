const getTheTitles = function(booksArr) {
  let titles = [];
  for (let book of booksArr) {
    titles.push(book.title)
  }

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
