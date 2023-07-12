import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAuthService } from '../services/auth.service';
import { v4 as uuidv4 } from "uuid";
import { SharedFunctionsService } from '../services/shared-functions.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent  implements OnInit{

  @Input() hideHeader!:boolean;
  loginRequest!: LoginRequest;

  constructor(
    private _authService:DataAuthService,
    private _sharedFunctions : SharedFunctionsService
  ) {}

  ngOnInit() {
    this._authService.authenticate().subscribe();
  }

  GoToSignIn(){
    this.prepareLoginRequest()
    this._authService.login(this.loginRequest).subscribe(
     (response) => {
        console.log('response: login', response);
      },
      (error: any) => {
        console.log('error: login', error);
      }
    );
    
  }


  prepareLoginRequest() {
    this.loginRequest = {
      emailOrPhoneNumber: "rana.obeid@tentimejo.com",
      password: this._sharedFunctions.md5(
        "1231236**"
      ),
      deviceDescription: this._sharedFunctions.getBrowser(),
      deviceToken: uuidv4(),
      deviceType: 1,
      isEarthLink: true,
      isScopeSky: true,
      isHalaSat: true
    };
  }


}
