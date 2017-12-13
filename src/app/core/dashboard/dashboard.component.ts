import { Component, OnInit } from '@angular/core';

// Entities
import { TrailsTotal } from './charts/trailsTotal';
import { TempoTotalEDistancia } from './charts/tempoTotalEDistancia';
// Interfaces
import { Chart } from './charts/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  trailsTotal: Chart  = new TrailsTotal(50);
  ttEDistancia: Chart = new TempoTotalEDistancia(50);

  constructor() { }

  ngOnInit() { }

  getListOfUsers() { }

}
