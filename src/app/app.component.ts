import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  standalone:true,
  imports:[RouterOutlet,MatDialogModule,SigninComponent,HttpClientModule]
})
export class AppComponent {
  title = 'tt-v16';
}
