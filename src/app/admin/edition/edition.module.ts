import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EditComponent]
})
export class EditionModule { }
