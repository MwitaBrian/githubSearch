import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile)
    })
   }

  ngOnInit(): void {
  }

}
