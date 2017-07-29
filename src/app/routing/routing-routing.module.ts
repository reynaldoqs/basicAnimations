import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from "../components/one/one.component";
import { TwoComponent } from "../components/two/two.component";
import { ThreeComponent } from "../components/three/three.component";
import { FourComponent } from "../components/four/four.component";

const routes: Routes = [
  {
    path:'', redirectTo:'/one',pathMatch:'full'
  },
  {
    path:'one',component:OneComponent, data:{animation:'onePage'}
  },
  {
    path:'two',component:TwoComponent, data:{animation:'twoPage'}
  },
  {
    path:'three', component:ThreeComponent, data:{animation:'threePage'}
  },
  {
    path:'four', component:FourComponent, data:{animation:'fourPage'}
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
