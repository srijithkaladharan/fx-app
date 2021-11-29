import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_utils/_services/auth.service';
import { DataService } from 'src/app/_utils/_services/data.service';
import { Roles } from '../../_utils/_constants/userType.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  userEmailId: string;
  isLoginFailed: boolean = false;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dataService.getUserDetails(this.userEmailId).subscribe((response) => {
      let userInfo = response.data;
      console.log(userInfo);
      this.dataService.getBranchDetails(userInfo.branch).subscribe((resp) => {
        this.setUserInfo(userInfo);
        this.dataService.setBranchInfo(resp.data);
      },
        (err) => {
          this.isLoginFailed = true;
        });
    },
      (err) => {
        this.isLoginFailed = true;
      });
  }

  onEmailChange() {
    this.isLoginFailed = false;
  }

  setUserInfo(userInfo) {
    this.authService.setUserInfo(userInfo).then(() => {
      if (userInfo.type.toUpperCase() === Roles.CONSULTANT) {
        this.router.navigateByUrl("/transact");
      } else {
        this.router.navigateByUrl("/manage");
      }
    });
  }

}
