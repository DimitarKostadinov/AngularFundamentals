import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table-elements',
  templateUrl: './table-elements.component.html',
  styleUrls: ['./table-elements.component.scss']
})
export class TableElementsComponent implements OnInit {
  @Input() pokemon;
  constructor() { }

  ngOnInit() {
  }

}
