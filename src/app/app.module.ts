import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//ROUTES
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'book/:id', component: BookComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'edit-book/:id', component: EditBookComponent},
  {path: 'delete-book/:id', component: DeleteBookComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
