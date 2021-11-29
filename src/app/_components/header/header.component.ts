import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_utils/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  userName: string;
  branchName: string;

  ngOnInit(): void {
    let userInfo = this.authService.getUserInfo();
    this.userName = userInfo.firstName + " " + userInfo.lastName;
  }


  logoutUser() {
    this.authService.logout();
  }

}
