import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-one',
  template: `
    <button (click)="expand()">Open</button>
    <button (click)="collapse()">Closed</button>
    <hr />
    <div class="toggle-container" [@openClose]="stateExpression">
      Look at this box
    </div>
  `,
  styles: [
    `
    .toggle-container {
      background-color:white;
      border:10px solid black;
      width:200px;
      text-align:center;
      line-height:100px;
      font-size:50px;
      box-sizing:border-box;
      overflow:hidden;
    }
    `
  ],animations:[

    trigger('openClose',[
      state('collapsed, void', style({height: '50px', color:'maroon', borderColor:'maroon'})),
      state('expanded', style({height: '*',borderColor:'green', color:'green'})),
      transition('collapsed <=> expanded', [
        animate(500)
      ])
    ] )

  ]
})
export class OneComponent implements OnInit {
 stateExpression: string;
  constructor() { }
  expand() { this.stateExpression = 'expanded'; }
  collapse() { this.stateExpression = 'collapsed'; }
  ngOnInit() {
    this.collapse();
  }

}
