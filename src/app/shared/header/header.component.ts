import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/login/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {



  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }


  backToHome(): void {
    console.log('i called');
  }
}
