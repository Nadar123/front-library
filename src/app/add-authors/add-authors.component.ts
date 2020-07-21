
import { 
  Component, 
  OnInit, 
  TemplateRef, 
  ViewChild, 
  AfterViewInit, 
  Inject, 
  ViewContainerRef, 
  ComponentFactoryResolver, 
  ComponentRef } from '@angular/core';
import { InputComponentComponent } from '../input-component/input-component.component';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.scss']
})
export class AddAuthorsComponent implements OnInit {
  ngOnInit(): void {
  }
  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }
  
  addNewComponent() {
    let childComponent = this.resolver.resolveComponentFactory(InputComponentComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }

}
