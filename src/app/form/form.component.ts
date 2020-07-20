import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  id: string;
  book: any;
  formTitle: string;

  constructor(
    private libraryService: LibraryService, 
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    // to bring the id
    this.route.params.subscribe((params) => this.id = params.id);
    // go to the service to bring an book
    if (this.id) {
      this.book = this.libraryService.getbooks();
      this.formTitle = 'Edit Book';
    } else {
        this.book = {
          name: '', 
          isbn_code: '', 
          author: '', 
          publising_name: '', 
          publising_year: '',
          expenditure: ''
        };
        this.formTitle = 'New Book';
    }
  }

  onSubmit() {
    // update new book
    if (this.id) {
      this.libraryService.update(this.book);

    } else {
      // create new book
      this.id = this.libraryService.create(this.book);
    }
    this.router.navigate([`bookitem/${this.id}`]);
  };

    // let disableBtn = false;
    // this. ngForm.valueChanges 
    //   .subscribe(() => {
    //     this.disableBtn = this. ngForm.valid;
    // });

}
