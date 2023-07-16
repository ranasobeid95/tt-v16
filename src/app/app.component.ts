import { Component, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { DataAuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  standalone:true,
  imports:[RouterOutlet,MatDialogModule,SigninComponent,HttpClientModule]
})
export class AppComponent implements OnInit{
  constructor(
    private _authService:DataAuthService,
  ) {}

  ngOnInit() {
    this._authService.authenticate().subscribe();
  }
}
