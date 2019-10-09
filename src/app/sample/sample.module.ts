import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { Child1Component } from './child1/child1.component';
import { SampleComponent } from './sample.component';


@NgModule({
  declarations: [ 
    Child1Component, 
    SampleComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule
  ],
  exports:[
    SampleComponent,
    Child1Component,
    SampleRoutingModule
  ]
})
export class SampleModule { }
