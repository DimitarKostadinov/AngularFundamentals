import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PokeSearchService } from '../../services/poke-search/poke-search.service';



@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit,OnDestroy {
 
  sub$;
  pokeData;
  targetName;
  constructor(private pokeSearch:PokeSearchService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
  pokemonSearchRequest(e){
    this.targetName=e.target.value;

   this.sub$=this.pokeSearch.getPokemons(this.targetName).subscribe(data=>{
      this.pokeData=data;
      console.log(this.pokeData)
    })
    
  }

}
