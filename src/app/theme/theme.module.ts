import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  exports: [TopbarComponent]
})
export class ThemeModule { }
