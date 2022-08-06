import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FurnitureComponent } from './Categories/furniture/furniture.component';
import { ElectronicsComponent } from './Categories/electronics/electronics.component';
import { BedsComponent } from './Categories/beds/beds.component';
import { ContactComponent } from './Categories/contact/contact.component';
import { GardenComponent } from './Categories/garden/garden.component';
import { CarpetsComponent } from './Categories/carpets/carpets.component';
import { FurnishingsComponent } from './Categories/furnishings/furnishings.component';
import { UsersessionComponent } from './usersession/usersession.component';



import { SearchPipe } from './home/search.pipe';

import { updateuserComponent } from './updateuser/updateuser.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent,
    
    FurnitureComponent,
    ElectronicsComponent,
    BedsComponent,
    ContactComponent,
    GardenComponent,
    CarpetsComponent,
    FurnishingsComponent,
    UsersessionComponent,
    
  
    
    SearchPipe,
    
    updateuserComponent
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
