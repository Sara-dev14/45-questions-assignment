type Book = {
    title: string;
    author: string;
    year: number;
  };
  
    function createBook(title: string, author: string, year: number): Book {
    return { title, author, year };
  }
  
  const book1 = createBook('Harry Potter and the Philosophers stone,', 'J.k. rowling', 1997);
  const book2 = createBook('One Of Us Is Lying', 'Karen M.MC Manus', 2017);
  const book3 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

console.log(book1);
console.log(book2);
console.log(book3); 