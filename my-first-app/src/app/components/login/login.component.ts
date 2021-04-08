import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiLoginResponse, ApiResponse } from 'src/app/models/apiResponse';
import { LoginDTO } from 'src/app/models/loginDTO';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:LoginDTO={ email: '', password: ''}

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService){      
      
  }

  ngOnInit() {     
      
  }
  

  onSubmit() {

    console.log(this.user)
        this.accountService.login(this.user)
        .subscribe((res:ApiLoginResponse)=>{
          if(res.isSuccessful){
            console.log("TOKEN: ",res.token)
            this.router.navigate(['/category'])
          }
        })     
  }

}
