import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favouriteBooks: any;
  unreadBooks: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {

    this.firebaseService.getFavouriteBooks()
      .subscribe(data => {
        console.log(data);
        this.favouriteBooks = data;
      })

    this.firebaseService.getUnreadBooks()
      .subscribe(data =>{
        this.unreadBooks = data;
      })
  }

}
