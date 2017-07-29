import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-four',
  template: `
    <button (click)="toggle()">Show / Hide Items</button>
    <button (click)="addItem()">add Item</button>
    <hr />
    <div [@listAnimation]="items.length">
      <div *ngFor="let item of items">
        {{ item }}
      </div>
    </div>
  `,
  styles: [],
  animations:[
    trigger('listAnimation',[
      transition('* => *', [

        query(':leave', [
          stagger(200, [
            animate('0.5s', style({opacity:0}))
          ])
        ], {optional:true}),

        query(':enter', [
          style({opacity:0}),
          stagger(200, [
            animate('0.5s', style({opacity:1}))
          ])
        ],{optional:true})

      ])
    ])
  ]
})
export class FourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [];
  showItems() {
    this.items = [0,1,2,3,4];
  }
  hideItems() {
    this.items = [];
  }
  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }
  addItem(){
    this.items.push(5);
  }
}
