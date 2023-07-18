import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent {

  @Input() hideHeader!: boolean;

  constructor(public dialog: MatDialog) {}
  GoToSignIn() {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('login done');
    });
  }
}
