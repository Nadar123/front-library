import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormComponent } from './form/form.component';
import {BookItemComponent} from './book-item/book-item.component'
const routes: Routes = [
  
  { path: '', component: BookListComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'newbook', component: FormComponent },
  { path: 'bookitem/:id', component: BookItemComponent },
  { path: 'newbook/edit/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
