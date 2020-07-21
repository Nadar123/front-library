import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  id: string;
  books: any;

  constructor(
    private libraryService: LibraryService, 
    private router: Router ) { }

  ngOnInit(): void {
    this.books = this.libraryService.getbooks();
  }

  delete() {
    this.libraryService.delete(this.id);
    this.router.navigate(['/']);
  }
}
