//SERVICE TO INTERACT WITH THE FIREBASE DATABASE

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {
  books: Observable<any[]>;
  favBooks: Observable<any[]>;
  unreadBooks: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  //function to get the list of books
  getBooks(){
    this.books = this.db.list('/books').valueChanges();
    return this.books;
  }

  //get favourite books
  getFavouriteBooks(){
    this.favBooks = this.db.list('/books').valueChanges().map(books =>{
      const topRatedBooks = books.filter(item => item['rate'] >4);
      return topRatedBooks;
    });
    return this.favBooks;
  }

  //get unread books
  getUnreadBooks(){
    this.unreadBooks = this.db.list('/books').valueChanges().map(books =>{
      const unreadBooks = books.filter(item => item['dateread'] == null)
      return unreadBooks;
    });
    return this.unreadBooks;
  }

}
