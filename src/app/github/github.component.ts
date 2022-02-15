import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  profile: any;
  repos: any;
  username: string;

  constructor(private profileService: ProfileService) {
    this.profile;
   }

   findProfile(){
     this.profileService.updateProfile(this.username);
     this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })   
    }

  ngOnInit(): void {
  }

}
