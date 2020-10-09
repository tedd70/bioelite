import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';

// Interfaces
import { GuestBookInterface } from '../../business/interfaces/guestBook.interface';

// Components
import { HomeFormComponent } from '../home-form/home-form.component';

// Services
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public titlePage = "Guest Book";
  public allGuestBook : GuestBookInterface[];

  constructor(
    private homeService: HomeService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.homeService.getAllGuestBooks().subscribe(data => {
      this.allGuestBook = data;
    });
  }

  openModal() {
    let guestBook = {
      name: '',
      email: '',
      message: '',
      status: ''
    }

    let dialogRef = this.dialog.open(HomeFormComponent, {
      width: '400px',
      data: guestBook,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result) {
        if(result.message) {
          result.status = result.message.includes('baddd') ? 'MODERATION_REQUIRED' : 'ACCEPTED';
        }
        this.homeService.addNewGuestBook(result).subscribe(data => {
          if (data.status == 'MODERATION_REQUIRED') {
            this._snackBar.open('You message was sent to the moderation queue.', 'Cancel', { duration: 2000 });
          }
          this.allGuestBook.push(data);
          console.log(data);
        });
      }
    });
  }

}
