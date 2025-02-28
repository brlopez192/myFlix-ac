import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // for *ngIf
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})

export class WelcomePageComponent {

  constructor(public dialog: MatDialog) { }
// This is the function that will open the dialog when the signup button is clicked  
openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
// Assigning the dialog a width
    width: '280px'
    });
  }

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
        width: "280px"
    })
}
openMoviesDialog(): void {
  this.dialog.open(MovieCardComponent, {
    width: '500px'
  });
}
}