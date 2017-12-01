import { Component,OnInit } from '@angular/core';
import { GitService } from './git.service';
import {GitProfile} from './git.profile';
import { error } from 'selenium-webdriver';
@Component({
  selector: 'git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
    
    public profileData : GitProfile;

    constructor(private gitService:GitService){ }
    
    ngOnInit(): void {
       this.gitService.getProfileInfo()
       .subscribe(data => 
        {
            this.profileData = data
        },err=>{
            alert(err.message);
        }
    )
    }
  
}