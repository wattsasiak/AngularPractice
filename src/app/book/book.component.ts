import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() theBook?: Book;
  
  constructor(private books: BookService) { }

  ngOnInit(): void {
  }

}
