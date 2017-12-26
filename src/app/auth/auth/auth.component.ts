import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthserviceService]
})
export class AuthComponent implements OnInit {
  getData: string;
  postedData: string;

  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
  }


  getUserInfo() {
    this.authService.userInfo().subscribe((arr) => {
      console.log(arr);
    }, (error) => {
      console.log(error);
    });
  }

  loginUser() {
    console.log(`Hello HMR World`);
    // this.authService.loginUser()
    //   .subscribe(
    //   data => this.postedData = JSON.stringify(data),
    //   error => alert(error),
    //   () => console.log('finished')
    //   );
  }
}

