import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignInInfo} from '../signin-info';
import {AuthServiceService} from '../service/auth-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isSignedIn = false;
  isSignFailed = false;
  errorMessage = '';
  returnUrl: string;
  loginForm = new FormGroup({
    managerUsername: new FormControl('', [ Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    managerPassword: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(100)])
  });
  constructor(private authService: AuthServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
  }

  signIn() {
    const {managerUsername, managerPassword} = this.loginForm.value;
    const signInInfoForm = new SignInInfo(managerUsername, managerPassword);
    this.authService.signIn(signInInfoForm).subscribe(
      data => {console.log(data); this.isSignedIn = true;
               this.isSignFailed = false;
               alert('thanh cong !!');
               this.router.navigateByUrl(this.returnUrl);
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignFailed = true;
      }
    );
  }
}
