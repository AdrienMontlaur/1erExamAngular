import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { EditionRoutingModule } from './edit/edition-routing.module';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditionRoutingModule
  ]
})
export class EditionModule { }
