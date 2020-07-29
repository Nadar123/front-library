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
  formErrors:any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _fb:FormBuilder,
    private booksService:BooksService
  ) {  }

  public get bookGroup():FormGroup{
    return this.bookForm.get('book') as FormGroup
  }
  public get authorsGroup():FormGroup{
    return this.bookForm.get('authors') as FormGroup
  }
  public get publishingGroup():FormGroup{
    return this.bookForm.get('publishing') as FormGroup
  }

  ngOnInit() {
    this.bookForm = this._fb.group({
      book:this._fb.group({
        name:['',[Validators.required]],
        isbn_code:['',[Validators.required,Validators.minLength(5)]],
        publishing_name:['',[Validators.required,Validators.minLength(5)]],
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
            isbn_code:[book.isbn_code,[Validators.required,Validators.minLength(4)]],
            publishing_name:[book.publishing_name,[Validators.required,Validators.minLength(3)]],
            publishing_year:[book.publishing_year,[Validators.required,Validators.minLength(5)]],
            expenditure:[book.expenditure,[Validators.required,Validators.minLength(2)]],
          }),
          authors:this._fb.group({
            first_name: [book.authors.length?book.authors[0].first_name:'', [Validators.required, Validators.minLength(2)]],
            last_name: [book.authors.length?book.authors[0].last_name:'', [Validators.required,Validators.minLength(2)]],
            date_of_birth: [book.authors.length?book.authors[0].date_of_birth:'', [Validators.minLength(2)]]
          }),
          publishing: this._fb.group({
            name: [book.publishing.name, [Validators.required, Validators.minLength(2)]],
            establish_year: [book.publishing.establish_year, [Validators.required, Validators.minLength(4)]],
            country: [book.publishing.country,[Validators.required, Validators.minLength(4)]]
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
    // this.error = null;
    // this.formErrors = [];
    // for (let control in this.bookForm['controls']){
    //    let formGroup = this.bookForm['controls'][control];
    //    for( let innerC in formGroup['controls']){
    //      let innerControl = formGroup['controls'][innerC];
    //      if(!innerControl.valid){
    //        this.formErrors.push({name:innerC,errors:innerControl.errors})
    //      }
    //    } 
    // }
  
    if(!this.bookForm.valid){
      this.error = "Form is Invalid";
      // console.log(this.bookForm)
      return;
    }
    switch(this.mode){
      case "update":
        this.bookForm.value.id=this.id;
        this.booksService.updateBook(this.bookForm.value)
        .subscribe((res:{code:number,data?:any,error?:string})=>{
          // console.log(res)
          return this.router.navigate(['/'])
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

}
