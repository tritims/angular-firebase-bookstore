//SERVICE TO INTERACT WITH THE FIREBASE DATABASE

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {
  books: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  //function to get the list of books
  getBooks(){
    this.books = this.db.list('/books').valueChanges();
    return this.books;
  }

}
