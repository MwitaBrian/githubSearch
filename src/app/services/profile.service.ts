import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private client_id = '1217c4db8551cca19ed6';
  private client_secret = 'ecc786830745ca7aadea966f57460207b3d7a372';
  

  constructor(private http: HttpClient ) {
    console.log("Service is now ready");
    this.username = 'MwitaBrian'
   }

   getProfileInfo(){
     return this.http.get<any>('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret='+ this.client_secret)
     .pipe(map(res => res));
   }

   getRepos(){
    return this.http.get<any>('https://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret='+ this.client_secret)
    .pipe(map(res => res));
  }

  updateProfile(username: string){
    this.username = username;
  }
}
