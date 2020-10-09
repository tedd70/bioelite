import {
  Component,
  OnInit,
  Inject
} from '@angular/core';

import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Interfaces
import { GuestBookInterface } from '../../business/interfaces/guestBook.interface';

// Components
import { HomeComponent } from '../home-container/home.component';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {
  public addGuestBookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GuestBookInterface
  ) { }

  ngOnInit() {
    this.addGuestBookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ )]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });

    console.log(this.addGuestBookForm)
  }

  get f() { return this.addGuestBookForm.controls; }

  closeDialog(): void {
    this.dialogRef.close();
  }
}