import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  theBooks: Book[];
  newBookTitle?: String;
  newBookAuthor?: String;
  newPublicationYear?: String;

  constructor(private books: BookService) { 
    this.theBooks = this.books.getBooks();
    console.log(this.theBooks);


  }

  ngOnInit(): void {
  }


  addBook(){

    if(this.newBookTitle && this.newBookAuthor && this.newPublicationYear){
      this.books.add(
        {title: this.newBookTitle, author: this.newBookAuthor, publicationYear: this.newPublicationYear}
        
      )
      alert("Your book has been added to the list!");
      } 
      
           
    else{
      alert("Please enter a title, author and publication year.");
    }
    }
    
  }

