import { Component, OnInit } from '@angular/core';
import { style, animate, transition, trigger, query, animateChild, stagger } from "@angular/animations";

@Component({
  selector: 'app-two',
  template: `
    <button (click)="toggle()">Toggle</button>
    <hr>
    <div [@parentAnimation]="exp">
      <header>Hello</header>
      <h2>Baby</h2>
      <div [@childAnimation]="exp">
          one
      </div>
      <div [@childAnimation]="exp">
          two
      </div>
      <div [@childAnimation]="exp">
          three
      </div>
    </div>
  `,
  styles: [],
  animations:[

    trigger('parentAnimation', [
      transition('start <=> end', [

        query('*', [
          style({opacity: 0})
        ]),

        query('header', [
          style({opacity: 0}),
          animate(500, style({opacity: 1}))
        ]),

        query('h2', [
          style({opacity: 0}),
          animate(1500, style({opacity: 1}))
        ]),

        query('@childAnimation', stagger(300, [
          animateChild()
        ]))

      ])
    ]),

    trigger('childAnimation', [
      transition('start <=> end', [
          style({opacity: 0}),
          animate(500, style({opacity: 1}))
      ])
    ])

  ]
})
export class TwoComponent implements OnInit {
  exp = 'start';
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.exp = this.exp == 'start'? 'end':'start';
  }

}
