import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  id: string;
  book: any;
  authors: any;
  publishing: any;
  formTitle: string;
  bookForm:FormGroup;
  mode:string = 'new';
  error:string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _fb:FormBuilder,
    private booksService:BooksService
  ) {  }

  ngOnInit() {
    this.bookForm = this._fb.group({
      book:this._fb.group({
        name:['',[Validators.required]],
        isbn_code:['',[Validators.required,Validators.minLength(8)]],
        authors:['',[Validators.required,Validators.minLength(2)]],
        publishing_name:['',[Validators.required,Validators.minLength(10)]],
        publishing_year:['',[Validators.required,Validators.minLength(5)]],
        expenditure:['',[Validators.required,Validators.minLength(2)]],
      }),
      authors:this._fb.group({
        first_name: ['', [Validators.required, Validators.minLength(2)]],
        last_name: ['', [Validators.required,Validators.minLength(2)]],
        date_of_birth: ['', [Validators.minLength(2)]]
      }),
      publishing: this._fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        establish_year: ['', [Validators.required, Validators.minLength(4)]],
        country: ['',[Validators.required, Validators.minLength(4)]]
      })
    })
   
  
    // to bring book-id
    this.route.params.subscribe((params) => {
    if (params.id) {
      this.book = this.booksService.findOne(parseInt(params.id)).subscribe((res:any)=>{
        if(!res.book){
          return;
        }
        this.id = params.id;
        this.mode='update';
        let book = res.book;
        this.authors = res.authors||null;
        this.publishing = res.publishing||null;

        this.bookForm = this._fb.group({
          book:this._fb.group({
            name:[book.name,[Validators.required]],
            isbn_code:[book.isbn_code,[Validators.required,Validators.minLength(8)]],
            author:[book.author,[Validators.required,Validators.minLength(2)]],
            publishing_name:[book.publishing_name,[Validators.required,Validators.minLength(10)]],
            publishing_year:[book.publishing_year,[Validators.required,Validators.minLength(5)]],
            expenditure:[book.expenditure,[Validators.required,Validators.minLength(2)]],
          }),
          authors:this._fb.group({
            first_name: [this.authors.first_name, [Validators.required, Validators.minLength(2)]],
            last_name: [this.authors.last_name, [Validators.required,Validators.minLength(2)]],
            date_of_birth: [book.date_of_birth, [Validators.minLength(2)]]
          }),
          publishing: this._fb.group({
            name: [this.publishing.name, [Validators.required, Validators.minLength(2)]],
            establish_year: [this.publishing.establish_year, [Validators.required, Validators.minLength(4)]],
            country: [this.publishing.country,[Validators.required, Validators.minLength(4)]]
          })
        })

      });
      this.formTitle = 'Edit Book';
    }
        this.formTitle = 'Book Details';
    }
  );
}

  onSubmit() {
    this.error = null;
    if(!this.bookForm.valid){
      this.error = "Form is"
    }
    switch(this.mode){
      case "update":
        this.bookForm.value.id=this.id;
        this.booksService.updateBook(this.bookForm.value)
        .subscribe((res:{code:number,data?:any,error?:string})=>{
          console.log(res)
      });
        break;
      default:
        this.booksService.createNewBook(this.bookForm.value)
        .subscribe((res:{code:number,data?:any,error?:string})=>{
          if(res.code === 200){
            return this.router.navigate(['/'])
          }else{
            this.error = res.error
          }
      });
    }
  };
  
  btnClick = function () {
    //this.router.navigateByUrl('/');
  };
}
