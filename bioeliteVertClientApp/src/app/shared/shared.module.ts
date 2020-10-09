import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// Components
import { HeaderComponent } from "../shared/components/header/header.component";
import { FormsModule } from '@angular/forms';
import { ScrollTopComponent } from './components/scrollToTop/scroll.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ScrollTopComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    ScrollTopComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}