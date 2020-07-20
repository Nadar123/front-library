import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  id: string;
  book: any;

  constructor(
    private libraryService: LibraryService, 
    private route:  ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.id = params.id);
    this.book = this.libraryService.getItem(this.id);
  }

  delete() {
    debugger;
    this.libraryService.delete(this.id);
    this.router.navigate(['booklist']);
  }
  
  btnClick = function () {
    this.router.navigateByUrl('/booklist');
  };
}
