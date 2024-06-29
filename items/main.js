function createBook(title, author, year) {
    return { title: title, author: author, year: year };
}
var book1 = createBook('Harry Potter and the Philosophers stone,', 'J.k. rowling', 1997);
var book2 = createBook('One Of Us Is Lying', 'Karen M.MC Manus', 2017);
var book3 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book1);
console.log(book2);
console.log(book3);
