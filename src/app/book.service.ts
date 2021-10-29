import { Injectable } from '@angular/core';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
  {title: 'Harry Potter', author: 'JK Rowling', publicationYear: '1997'},
  {title: 'The Little Prince', author: 'Antoine de Saint-Exupery', publicationYear: '1943'},
  {title: 'And Then There Were None', author: 'Agatha Christie', publicationYear: '1939'}
  ];


  constructor() { }


  //getBooks method returns the book array
  getBooks(): Book[]{
    return this.books;
  }


  //add to the list
  add(theBook: Book){
    this.books.push(theBook);
  }
}
