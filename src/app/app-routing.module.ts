import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { BedsComponent } from './Categories/beds/beds.component';
import { CarpetsComponent } from './Categories/carpets/carpets.component';
import { ContactComponent } from './Categories/contact/contact.component';
import { ElectronicsComponent } from './Categories/electronics/electronics.component';
import { FurnishingsComponent } from './Categories/furnishings/furnishings.component';
import { FurnitureComponent } from './Categories/furniture/furniture.component';
import { GardenComponent } from './Categories/garden/garden.component';


import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';


import { SigninComponent } from './signin/signin.component';
import { updateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'beds',component:BedsComponent},
  {path:'carpet',component:CarpetsComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'furnishings',component:FurnishingsComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'contact',component:ContactComponent},
  {path:'garden',component:GardenComponent},

  {path:'newuser/:id',component:updateuserComponent},
  
  
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
