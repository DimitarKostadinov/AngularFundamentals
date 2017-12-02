import { Component, OnInit,Input } from '@angular/core';
import { FocusService } from '../../services/focus/focus.service';

@Component({
  selector: 'app-table-elements',
  templateUrl: './table-elements.component.html',
  styleUrls: ['./table-elements.component.scss']
})
export class TableElementsComponent implements OnInit {
  @Input() pokemon;
  constructor(private focus:FocusService) { }
  pokeData;
  ngOnInit() {
  }
  select(id){
    
    this.focus.getPokemonsImage(id).subscribe(data=>{
      this.pokeData=data.img;  //Тук връща Адреса на Снимката
  //МАХНИ Първоначално това .img за да тръгне проекта
  // И след това го добави отново(не знам защо така става,
  // но не иска да се билдне първия път)
     
      
  })

}}
