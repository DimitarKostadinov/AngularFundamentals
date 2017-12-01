import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit,OnDestroy {
 sub$;

  payload={
    username:'',
    password:''
  }
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  collectAuthData(e){
    this.payload[e.target.name]=e.target.value
  }
  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  login(){
    this.sub$=this.auth.authFunc(this.payload).subscribe(data=>{
      
      sessionStorage.setItem('authToken',data.authtoken);
    })
  }
  
}
