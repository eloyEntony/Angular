import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ApiLoginResponse, ApiResponse } from 'src/app/models/apiResponse';
import { LoginDTO } from 'src/app/models/loginDTO';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:LoginDTO={ email: 'entony@gmail.com', password: 'Qwerty1-'}

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService,
              private notifier: NotifierService){      
      
  }

  ngOnInit() { }

  onSubmit() {

    console.log(this.user)
        this.accountService.login(this.user)
        .subscribe((res:ApiLoginResponse)=>{
          if(res.isSuccessful){
            console.log("TOKEN: ",res.token)
            this.setSession(res.token)
            this.notifier.notify('success', 'Login success')
            this.router.navigate(['/category'])
          }
          else{
            this.notifier.notify('error', 'bad data')
          }
        })     
  }

  private setSession(token: string){   

    localStorage.setItem('id_token', token);
    
}          

}
