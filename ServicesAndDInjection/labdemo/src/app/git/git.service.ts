import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import { Observable} from "rxjs/Observable"
import {GitProfile} from './git.profile';
@Injectable()
export class GitService{
 constructor(
     private http:HttpClient
 ){ }
 getProfileInfo():Observable<GitProfile>{
    const url="https://api.github.com/users/nakov";
    return this.http.get<GitProfile>(url);
 }
}