import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthserviceService {
  //url: string = 'http://localhost:9898/api/';

  constructor(private http: Http) { }

  userInfo(): Observable<string[]> {
    return this.http.get('/api/version').map((resp: Response) =>  resp.json() as string[]
  );
      // .map(res => res.json())
      //s.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  loginUser() {
    const user_access = {
      user_name: "rasha.atta@sphinxinfotech.net",
      password: "P@ssw0rd123"
    }
    return this.http.post('http://localhost:9898/api/login', user_access)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
