import { Component, OnInit,OnDestroy } from '@angular/core';
import { FocusService } from '../../services/focus/focus.service';


@Component({
  selector: 'app-focused',
  templateUrl: './focused.component.html',
  styleUrls: ['./focused.component.scss']
})
export class FocusedComponent implements OnInit {
  
  pokemonOnFocus;
  constructor(private focus:FocusService) {
    this.focus.getPokemonsImage("001").subscribe(data=>{
      this.pokemonOnFocus=data;
    })
   }


  ngOnInit() {
  }

 


}
