import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ValidationError } from './validation-error.interface';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit, DoCheck {

  constructor() { }

  @Input() public errors: ValidationError | null = null;
  @Input() public errMsgSingle: string = "";
  public errMsgList: string[] = [];

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    if (this.errors) {
      this.errMsgList = [];
      for (let err in this.errors) {
       this.errMsgList.push(...this.errors[err]);
      }
    }
  }

}
