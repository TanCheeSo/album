import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() albumListFromAdd: Album[] = [];

  constructor() { }

  ngOnInit() {
  }

}
