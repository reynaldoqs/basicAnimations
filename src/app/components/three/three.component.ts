import { Component, OnInit } from '@angular/core';
import { animate, state, trigger, style, transition, query } from "@angular/animations";

@Component({
  selector: 'app-three',
  template: `
    <button (click)="toggle()">Toggle</button>
    <hr>
    <div [@queryAnimation]="vur">
        <h1>title</h1>
        <h2>sub Title</h2>
        <p> this is a shit, bcoz angular will die in some years :V </p>
    </div>
  `,
  styles: [`
  `],
  animations:[
    trigger('queryAnimation', [
      transition('start <=> end', [

        query('h1', [
          style({opacity: 0,transform:'translateX(100%)'})
        ]),

        query('h2', [
          style({opacity: 0,transform:'translateY(100%)'})
        ]),

        query('p', [
          style({opacity: 0,transform:'translateX(-100%)'})
        ]),

        query('h1', [
          animate(800, style({opacity: 1,transform:'translateX(0%)'}))
        ]),

        query('h2', [
          animate(300, style({opacity: 1,transform:'translateY(0%)'}))
        ]),

        query('p', [
          animate(800, style({opacity: 1,transform:'translateX(0%)'}))
        ]),

    /*   para resetear!
     query('*', [
          animate(1000, style('*'))
        ]),
      */
      ])
    ])
    
  ]
})
export class ThreeComponent implements OnInit {
  vur: string;
  constructor() {}

  ngOnInit() {
    this.vur='start';
  }
  toggle() { 
    this.vur = this.vur == 'start'?'end':'start'; 
  }

}
