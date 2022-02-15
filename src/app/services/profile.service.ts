import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private user: string;
  

  constructor(private http: HttpClient ) {
    console.log("Service is now ready");
    this.user = 'MwitaBrian'
   }

   getProfileInfo(){
     return this.http.get<any>('https://api.github.com/users/' + this.user)
     .pipe(map(res => res));
   }
}
