import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignupInfo} from '../signup-info';
import {AuthServiceService} from '../service/auth-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSignedUp = false;
  isSignFailed = false;
  errorMessage = '';
  returnUrl: string;
  registerForm = new FormGroup({
    managerUsername: new FormControl('', [ Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    managerPassword: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
    confirmPassword: new FormControl('', [Validators.required]),
    managerName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
  });
  constructor(private authService: AuthServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
  }

  signUp() {
    const {managerUsername, managerPassword, managerName} = this.registerForm.value;
    const signUpInfoForm = new SignupInfo(managerUsername, managerPassword, managerName);
    this.authService.signUp(signUpInfoForm).subscribe(
      data => {console.log(data); this.isSignedUp = true;
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
