import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Observable<any[]>;
  allBooks: any;

  constructor(private db: AngularFireDatabase) { 
    this.books = db.list('/books').valueChanges();
    this.books.subscribe(books =>{
      this.allBooks = books;
    })
  }

  ngOnInit() {
  }

}
