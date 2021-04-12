import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService: AccountService,
    private notifier: NotifierService) { }

  ngOnInit() {
  }

  logout(){
    this.accountService.logout();
    this.notifier.notify('success', 'Logout success')
  }

  

}
