import { animation, style, animate } from '@angular/animations';

var standartAnimation = animation([
    style({opacity: '{{start}}'}),
    animate('{{time}}', style({opacity:'{{end}}'}))
], {params:{time:'1000ms', start:0,end:1}})