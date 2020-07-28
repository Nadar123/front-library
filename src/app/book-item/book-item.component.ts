import { Component, OnInit } from '@angular/core' 
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  id: string;
  book$: Observable<any>;
  author: any;
  publishing: any;
  address: any;


  constructor(
    private booksService: BooksService,
    private route:  ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.book$ = this.booksService.findOne(parseInt(this.id)).pipe(
        map((res:any)=>res.book)
        );
    });
  }

  delete() {
    this.router.navigate([`bookitem/${this.id}`]);
  }
  
  btnClick = function () {
    this.router.navigateByUrl('/');
  };
}
