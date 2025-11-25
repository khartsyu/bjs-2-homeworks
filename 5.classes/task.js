class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }
  /*  for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }*/

  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
    if (!book) return null;
    this.books = this.books.filter((item) => item.name !== bookName);
    return book;
  }
  /* for (let i = 0; i < this.books.length; i++) {
     if (this.books[i].name === bookName) {
       let requiredBook = this.books[i];
       this.books.splice(i, 1);
       return requiredBook;
     }
   }
   return null;
 }
   */
}


/*тест*/

let library = new Library("Северодвинская библиотека");

library.addBook(new Magazine("Мурзилка", 2001, 24));
library.addBook(new Book("В. Гауф", "Холодное сердце", 2016, 100));
library.addBook(new NovelBook("М. Булгаков", "Мастер и Маргарита", 1967, 480));
library.addBook(new FantasticBook("Дж. Роулинг", "Гарри Поттер", 2000, 1200));
library.addBook(new DetectiveBook("А. Кристи", "Убийство в восточном экспрессе", 1933, 500));

let releaseDate1919 = library.findBookBy('releaseDate', 1919);

if (!releaseDate1919) {
  console.log("Книга не найдена");
  releaseDate1919 = new Book("Л. Баум", "Волшебство Страны Оз", 1919, 56);
  library.addBook(releaseDate1919);
  console.log("Добавлена книга");
} else {
  console.log("Книга найдена");
}

let give = "Гарри Поттер";
let givenBook = library.giveBookByName(give);

if (givenBook) {
  console.log(`Книга выдана`);
} else {
  console.log("Книга не найдена");
}

if (givenBook) {
  givenBook.state = 30;
}

if (givenBook) {
  givenBook.fix();
  givenBook.state = 10;
  givenBook.fix();
  givenBook.fix();
}

if (givenBook) {
  let booksBefore = library.books.length;
  library.addBook(givenBook);
  let booksAfter = library.books.length;
}





class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if ((mark < 2) || (mark > 5)) {
      return 0;
    }
    if (!this.marks.hasOwnProperty(subjectName)) {
      this.marks[subjectName] = [];
    }
    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    if (!this.marks[subjectName] || this.marks[subjectName].length === 0) {
      return 0;
    }
    return this.marks[subjectName].reduce((total, mark) => total + mark, 0) / this.marks[subjectName].length;
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    let totalAverage = subjects.reduce((sum, subject) => {
      return sum + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}
