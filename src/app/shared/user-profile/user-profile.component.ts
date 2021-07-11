import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/login/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logOut(): void{
    this.authService.logOut();
  }
}
