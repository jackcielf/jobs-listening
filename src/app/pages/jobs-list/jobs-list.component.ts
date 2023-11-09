import { Component, OnInit } from '@angular/core';
import data from "../../../data.json";

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  dataCards = data;

  constructor() { }

  ngOnInit() { }

}
