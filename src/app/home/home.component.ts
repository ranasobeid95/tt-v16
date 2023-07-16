import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  @Input() hideHeader!: boolean;

  constructor(public dialog: MatDialog) {}


  ngOnInit() {}

  GoToSignIn() {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('login done');
    });
  }
}
