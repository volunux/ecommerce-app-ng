import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-entity-one-description-val-msg',
  templateUrl: './entity-one-description-val-msg.component.html',
  styleUrls: ['./entity-one-description-val-msg.component.css']
})
export class EntityOneDescriptionValMsgComponent implements OnInit {

  constructor() { }

  @Input() public description: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
