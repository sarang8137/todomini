import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'reg',component:RegComponent},
  {path:'',component:LoginComponent},
  {path:'add',component:AddComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
