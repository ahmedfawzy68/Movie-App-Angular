import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern('^[A-Z][a-z]*[0-9]*$')]),
  });

  constructor(private _AuthService:AuthService, private _Router:Router) {}

  ngOnInit(): void {
  }

  submitter(loginForm:FormGroup){
    if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe((resp)=>{
        if(resp.message == 'success'){
          localStorage.setItem('userToken', resp.token)
          this._Router.navigate(['home']);
          this._AuthService.saveUserData();
        }
        else{
          this.error = resp.message;
        }
      })
    }
  }

  

}
