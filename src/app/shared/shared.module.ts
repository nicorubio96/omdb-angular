import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ResultComponent } from './result/result.component';
import { InputComponent } from '../input/input.component';



@NgModule({
  declarations: [
    NavComponent,
    ResultComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    
  ],exports:[
    NavComponent,
    ResultComponent,
    InputComponent
  ]
})
export class SharedModule { }
