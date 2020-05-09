import { NgModule } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [DatePickerComponent]
})
export class DatePickerModule { }
