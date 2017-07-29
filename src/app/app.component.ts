import { Component } from '@angular/core';
import { trigger, transition, style, query, animate, group, animateChild } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('routeAnimation',[

      /* noob says me put it in your code
      transition(':enter', [
      ]),*/

    transition('* => *', [
      query(':enter, :leave', style({position:'fixed'}),{optional:true}),
      
      group([
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 })),
          animateChild()
        ],{optional:true}),
        query(':leave', [
          animate('1s', style({ opacity: 0 })),
          animateChild()
        ],{optional:true})
      ])

    ])  

    ])
  ]
})
export class AppComponent {
  prepRouteState(outlet: any){
    return outlet.activatedRouteData['animation'] || 'firstPage'; 
  }
}
