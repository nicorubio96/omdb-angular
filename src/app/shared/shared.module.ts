import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ResultComponent } from './result/result.component';
import { InputComponent } from '../input/input.component';
import { DetailComponent } from '../detail/detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    ResultComponent,
    InputComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
    
    
  ],exports:[
    NavComponent,
    ResultComponent,
    InputComponent,
    DetailComponent,
    FormsModule
  ]
})
export class SharedModule { }
