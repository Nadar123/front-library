import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BooksService} from './services/books.service';
// import {HttpService} from './services/http.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormComponent } from './form/form.component';
import { BookItemComponent } from './book-item/book-item.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { InputComponentComponent } from './input-component/input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookListComponent,
    FormComponent,
    BookItemComponent,
    AddAuthorsComponent,
    InputComponentComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
